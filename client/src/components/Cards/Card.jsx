import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Card({ item }) {
  const { id, productName, details } = item;
  const { images, Specialprize } = details;
  const imageSrc = images.length > 0 ? images[0] : '';

  return (
    <div className='w-[14rem] h-[20rem] rounded-md relative overflow-hidden shadow-xl m-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white select-none'>
      <div className='h-[15rem]  flex justify-center items-center'>
        {/* Image */}
        <div className='w-full h-full flex justify-center items-center'>
          <img
            src={imageSrc}
            className='max-w-full max-h-full object-contain'
            alt='Product Image'
          />
        </div>
      </div>
      <div className='w-full h-[5rem]   flex items-center justify-between bg-gray-100 p-4 rounded-b-md'>
        {/* Content */}
        <div className='text-center md:text-left mb-2 md:mb-0 w-[100%]'>
          <h6>{productName}</h6>
          <p className='text-sm'>{Specialprize}</p>
        </div>
        {/* Link to Product Page with Product ID */}
        <Link
          to={`/product/${id}`}
          className='p-2 rounded-full hover:bg-black hover:text-white'
        >
          <MdOutlineArrowForward />
        </Link>
      </div>
    </div>
  );
}