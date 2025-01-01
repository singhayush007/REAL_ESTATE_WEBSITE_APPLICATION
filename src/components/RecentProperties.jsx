import React from "react";
import PropertyCard from './PropertyCard';

const RecentProperties = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center my:10 sm:my-28">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-700 my-10">Recent Properties</h1>
            <div className="grid sm:grid-cols-3 gap-12">  
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </div>
    );
};

export default RecentProperties;

