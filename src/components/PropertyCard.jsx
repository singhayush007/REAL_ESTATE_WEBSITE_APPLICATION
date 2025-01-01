import React from 'react'

const PropertyCard = (
    {
        image= "https://images.pexels.com/photos/7804488/pexels-photo-7804488.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title = "AVA Nob Hill",
        price ="$1109/mon",
        sqft = "1200 sq ft",
        bedrooms = "4 bedrooms",
        bathrooms ="2 Bathrooms"
    })=> {
    return (
        <div className='w-full max-w-sm mx-auto bg-white shadow-md overflow-hidden '>
            <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/7804488/pexels-photo-7804488.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Property"
            />
            <div className="p-4">
                <h2 className='text-xl sm:text-2xl font-bold text-yellow-500 mb-3'>AVA Nob Hill</h2>
                <h3 className='text-lg sm:text-xl font-bold text-gray-700'>$1109/mon</h3>
                <ul className='flex flex-wrap gap-4 text-sm sm:text-base text-gray-500 font-medium my-4'>
                    <li>1200 sq ft</li>
                    <li>4 bedrooms</li>
                    <li>2 bathrooms</li>
                </ul>
                <p className='text-gray-600 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, a maxime aliquam aspernatur non doloribus voluptatum quaerat dolor ad.
                </p>
            </div>
        </div>
    )
}

export default PropertyCard;




