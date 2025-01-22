import React from 'react';

const PropertyCard = ({ image, title, price, sqft, bedrooms, bathrooms }) => {
    return (
        <div className='w-full max-w-sm mx-auto bg-white shadow-md overflow-hidden rounded-lg'>
            <img
                className="w-full h-48 object-cover"
                src={image}  // ✅ Props se image lena
                alt={title}   // ✅ Props se title lena
            />
            <div className="p-4">
                <h2 className='text-xl sm:text-2xl font-bold text-yellow-500 mb-3'>{title}</h2>
                <h3 className='text-lg sm:text-xl font-bold text-gray-700'>{price}</h3>
                <ul className='flex flex-wrap gap-4 text-sm sm:text-base text-gray-500 font-medium my-4'>
                    <li>{sqft}</li>
                    <li>{bedrooms}</li>
                    <li>{bathrooms}</li>
                </ul>
                <p className='text-gray-600 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, a maxime aliquam aspernatur non doloribus voluptatum quaerat dolor ad.
                </p>
            </div>
        </div>
    );
};

export default PropertyCard;





