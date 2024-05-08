import React, { useEffect, useState } from 'react';
import './CSS/Category.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFetchData from '../components/useFetchData';
import { useData } from '../components/ProductData';
import { categorizeCards } from '../utils/categorizeCards';




const Category = (props) => {
    const [Data, setData] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const location = useLocation();

  const { data,error } = useData()
    // Fetch data from backend
    useEffect(()=>{
        if(error){
            console.log("Error::",error);
        }
        setData(data)
    })

    
const {itemCards,categories}=categorizeCards(data)

    const handleFilterChange = (filter) => {
        console.log("You have selected",filter)
        const lowercaseFilter = filter.toLowerCase();
        if (selectedFilters.includes(lowercaseFilter)) {
            setSelectedFilters(selectedFilters.filter((item) => item !== lowercaseFilter));
        } else {
            setSelectedFilters([...selectedFilters, lowercaseFilter]);
        }
    };


    const filterProducts = () => {
    if (selectedFilters.length === 0) {
        return Data; // Return all products if no filters are selected
    } else {
            console.log("selected filters : ",selectedFilters)
            return Data.filter((item) => selectedFilters.includes(item.category.toLowerCase()));
    }
};

    console.log(filterProducts());

    const renderProducts = () => {
        
        const filteredProducts = filterProducts();
        return (
            <>
            {filteredProducts.map((item) => (
              <Link to={`/product/${item._id}`} key={item._id}>
                <div className="Product">
                  {/* <img src={item.details.images[0]} alt={item.product_name} /> */}
                  {/* <img src={`http://127.0.0.1:5000/static/imgs/${item.details.images[0]}`} alt={item.product_name} /> */}
                  <div className='Product-details'>
                    <h1>{item.product_name}</h1>
                    <h2>{item.category}</h2>
                    {/* <h3>Rs .{item.details.price}</h3> */}
                  </div>
                </div>
              </Link>
            ))}
          </>
        );
    };

    const screenWidth = window.innerWidth;
console.log('Screen width:', screenWidth);


    return (
        <>
            <Navbar />
            {console.log(selectedFilters)}
            <div className="Category">
                <div className="Category-Filters">
                    <h1>Filter</h1>
                    <div className='Checkboxes'>
                        <label>
                            <input
                                type="checkbox"
                                value="Electronic"
                                checked={selectedFilters.includes('electronic')}
                                onChange={() => handleFilterChange('electronic')}
                            />
                            Electronic
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Household"
                                checked={selectedFilters.includes('household')}
                                onChange={() => handleFilterChange('household')}
                            />
                            Household
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="grocery"
                                checked={selectedFilters.includes('grocery')}
                                onChange={() => handleFilterChange('grocery')}
                            />
                            Grocery
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Clothes"
                                checked={selectedFilters.includes('clothes')}
                                onChange={() => handleFilterChange('clothes')}
                            />
                            Clothes
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Furniture"
                                checked={selectedFilters.includes('furniture')}
                                onChange={() => handleFilterChange('furniture')}
                            />
                            Furnitures
                        </label>
                    </div>
                </div>
                <div className="Category-Products">
                    {renderProducts()}
                </div>
            </div>
            {    
    }
            <Footer />
        </>
    );
};

export default Category;