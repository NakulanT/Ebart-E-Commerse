import React, { useState, useEffect } from 'react';
import './CSS/Collectionsbar.css'
import { FaArrowRight } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Category from '../pages/Category';

const CollectionsBar = (props) => {
    return (
        <>
            <CollectionsBarImageRendering
                Images={props.Images}
                Title={props.Text}
                Offer={props.Offer}
                Category ={props.Category}
            />
            <br />
        </>
    );
}

const CollectionsBarImageRendering = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(true);

    const HandleNext = () => {
        setIsImageVisible(false);
        setTimeout(() => setIsImageVisible(true), 10);
        setCurrentIndex((currentIndex + 1) % props.Images.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIsImageVisible(false);
            setTimeout(() => setIsImageVisible(true), 10); // Set isImageVisible to true after a short delay
            setCurrentIndex((prevIndex) => (prevIndex + 1) % props.Images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [props.Images.length , HandleNext]);

    // Get the width of the screen
const screenWidth = window.innerWidth;

// Log the width to the console
console.log('Screen Width:', screenWidth);

    return (
        <div className="CollectionsBanner">
            <div className="FirstBanner">
                <h2>Amazing Collections</h2>
                <h1>{props.Title}</h1>
                <Link to={`/category`} state={{from: props.Category }} >
                <button>Shop Now <FaArrowRight className="RightArrow" />
                </button>
                </Link>
                
                {isImageVisible && (
                    <img className={`Image-${isImageVisible ? 'visible' : 'hidden'}`} src={props.Images[currentIndex]} alt="IMAGE" />
                )}
                <div className="OfferDetails">
                    <h3>{props.Offer} % off</h3>
                    <h4>|</h4>
                    <a>See Offers</a>
                </div>
            </div>
            <div className="SubBanner">
                <img className={`Image-${isImageVisible ? 'visible' : 'hidden'}`}src={props.Images[(currentIndex + 1) % props.Images.length]} alt="IMAGE" />
            </div>
            <div className="SubBanner" id="RemovalImage1">
                <img className={`Image-${isImageVisible ? 'visible' : 'hidden'}`}  src={props.Images[(currentIndex + 2) % props.Images.length]} alt="IMAGE" />
            </div>
            <div className="SubBanner" id="RemovalImage2">
                <img  className={`Image-${isImageVisible ? 'visible' : 'hidden'}`} src={props.Images[(currentIndex + 3) % props.Images.length]} alt="IMAGE" />
            </div>
            <button className="NextButton" onClick={HandleNext}><GrLinkPrevious /></button>
        </div>
    );
}

export { CollectionsBar, CollectionsBarImageRendering };
