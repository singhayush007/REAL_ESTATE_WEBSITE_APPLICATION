import React from 'react'
import CategoryItem from './CategoryItem'

const categoryArr = [
    {
        id: 1,
        title: "Crazy Houses",
        image: "https://images.pexels.com/photos/12701910/pexels-photo-12701910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 2,
        title: "With Swimming Pool",
        image: "https://images.pexels.com/photos/12701910/pexels-photo-12701910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 3,
        title: "Studio Apartment",
        image: "https://images.pexels.com/photos/12701910/pexels-photo-12701910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 4,
        title: "Luxury Houses",
        image: "https://images.pexels.com/photos/12701910/pexels-photo-12701910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
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
