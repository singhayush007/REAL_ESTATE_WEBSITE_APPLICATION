import React from "react";
import PropertyCard from './PropertyCard';

const properties = [
    {
        id: 1,
        title: "Luxury Villa",
        location: "Los Angeles, CA",
        price: "$1,200,000",
        sqft: "3500 sq ft",
        bedrooms: "5 Bedrooms",
        bathrooms: "3 Bathrooms",
        image: "https://img.freepik.com/free-photo/render-architectural-matrix-stunning-villa-background_1409-5190.jpg?t=st=1739428088~exp=1739431688~hmac=f844ae7fb80c3be68d210f11b4381d3d68d235793fab007c7c18444a95541892&w=996"
    },
    {
        id: 2,
        title: "Modern Apartment",
        location: "New York, NY",
        price: "$850,000",
        sqft: "1500 sq ft",
        bedrooms: "3 Bedrooms",
        bathrooms: "2 Bathrooms",
        image: "https://img.freepik.com/premium-photo/modern-city-apartment-night_1156559-5396.jpg?w=996"
    },
    {
        id: 3,
        title: "Cozy Cottage",
        location: "Austin, TX",
        price: "$450,000",
        sqft: "1800 sq ft",
        bedrooms: "4 Bedrooms",
        bathrooms: "2 Bathrooms",
        image: "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118895.jpg?t=st=1739428498~exp=1739432098~hmac=3ecf95892bd647d93235d8f2d010533471b83761a8decc8314b563789cf422be&w=740"
    },
    {
        id: 4,
        title: "Beach House",
        location: "Miami, FL",
        price: "$2,300,000",
        sqft: "4200 sq ft",
        bedrooms: "6 Bedrooms",
        bathrooms: "4 Bathrooms",
        image: "https://img.freepik.com/premium-photo/coastal-beach-house-design_670382-176045.jpg?w=996"
    },
    {
        id: 5,
        title: "Penthouse Suite",
        location: "Chicago, IL",
        price: "$1,800,000",
        sqft: "2500 sq ft",
        bedrooms: "3 Bedrooms",
        bathrooms: "2 Bathrooms",
        image: "https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037460.jpg?t=st=1739428234~exp=1739431834~hmac=e66849dc085f54eda3f6599129afea5ac4737506a52942baabc12d75dd70b75e&w=996"
    },
    {
        id: 6,
        title: "Family Home",
        location: "Seattle, WA",
        price: "$670,000",
        sqft: "2000 sq ft",
        bedrooms: "4 Bedrooms",
        bathrooms: "2 Bathrooms",
        image: "https://img.freepik.com/free-photo/minimalist-interior-3d-rendering_52683-131548.jpg?t=st=1739428629~exp=1739432229~hmac=d67dcd61f0cb5ad0b67b774bc0abc3991adcbf94928f4148d3f810e80fc5bbd1&w=740"
    }
];

const RecentProperties = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center my-10 sm:my-28">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-700 my-10">Recent Properties</h1>
            <div className="grid sm:grid-cols-3 gap-12">
                {properties.map((property) => (
                    <PropertyCard 
                        key={property.id}
                        title={property.title}
                        price={property.price}
                        sqft={property.sqft}
                        bedrooms={property.bedrooms}
                        bathrooms={property.bathrooms}
                        image={property.image}
                    />
                ))}
            </div>

            {/* ✅ View All Properties Button */}
            <button className="mt-6 px-6 py-3 text-black bg-transparent border-2 border-yellow-500 uppercase font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition">
                View All Properties
            </button>
        </div>
    );
};

export default RecentProperties;



