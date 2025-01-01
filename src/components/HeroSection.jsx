import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

const imgArray = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/13603107/pexels-photo-13603107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
];

const HeroSection = () => {
    return (
        <div className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden">
            {/* Swiper Container */}
            <Swiper className="w-full h-full">
                {imgArray.map(({ id, img }) => (
                    <SwiperSlide key={id} className="flex justify-center items-center">
                        <img
                            className="w-full h-full object-cover brightness-50"
                            src={img}
                            alt={`Slide ${id}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center z-10">
                {/* Heading */}
                <h2 className="text-3xl sm:text-5xl font-bold text-white">
                    Find Your Dream Home
                </h2>

                {/* Search Bar */}
                <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-4 items-center">
                    <input
                        type="search"
                        className="w-full sm:w-[70%] py-3 px-5 text-gray-800 rounded-md bg-white outline-none shadow-lg"
                        placeholder="Search by City or Address"
                    />
                    <button
                        onClick={() => alert("Search clicked!")}
                        className="w-full sm:w-[20%] py-3 bg-yellow-500 text-white font-bold uppercase rounded-md shadow-lg hover:bg-yellow-400 transition-all duration-300"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;



