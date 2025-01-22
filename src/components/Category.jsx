import React from 'react'
import CategoryItem from './CategoryItem'

const categoryArr = [
    {
        id: 1,
        title: "Crazy Houses",
        image: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799627.jpg?t=st=1739429206~exp=1739432806~hmac=a2478dbd4becfe469f890f4f702deacc9b6be9da7675ad06bff4ee7228358599&w=996"
    },
    {
        id: 2,
        title: "With Swimming Pool",
        image: "https://img.freepik.com/premium-photo/3d-house-model-with-pool-low-angle_23-2149314210.jpg?w=740"
    },
    {
        id: 3,
        title: "Studio Apartment",
        image: "https://img.freepik.com/free-photo/small-juvenile-bedroom-arrangement_23-2151113746.jpg?t=st=1739428902~exp=1739432502~hmac=459c5ab71f0b02a1b660705797d374cc863fcc810e7a8d9353923f393efc7cda&w=996"
    },
    {
        id: 4,
        title: "Luxury Houses",
        image: "https://img.freepik.com/free-photo/luxury-architecture-exterior-design_23-2151920969.jpg?t=st=1739428956~exp=1739432556~hmac=91f2f27409242bcec2511ed3e4f8aebef4728c47549f9e7dd5a1520650570676&w=996"
    }
]

const Category = () => {
    return (
        <div className='my-14 mx-auto flex gap-5 w-[95vw] overflow-x-auto scrollbar-hide '>
            {categoryArr.map(({ id, title, image, }) => (
                <CategoryItem
                    key={id}
                    title={title}
                    image={image}
                />
            ))}
        </div>
    );
};

export default Category;
