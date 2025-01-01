import React from 'react';

const CategoryItem = ({ title = "Unlisted", image }) => {
  return (
    <div className="relative rounded-md">
      <img
        src={image || "https://images.pexels.com/photos/7804488/pexels-photo-7804488.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
      
        alt="category"
        className="min-w-[60vw] sm:min-w-[25rem] max-h-[20vh] sm:max-h-[15rem] rounded-md"
      />
      <div>
        <h1 className="absolute top-1/2 sm:left-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white z-10">{title}
        </h1>
      </div>
    </div>
  );
};

export default CategoryItem;

