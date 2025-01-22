import React from 'react';

const ToolsAndResources = () => {
  return (
    <div className="w-full h-[550px] relative">
      {/* Background Image with Reduced Brightness and Shorter Height */}
      <img 
        src="https://hungaryphototours.com/wp-content/uploads/2015/09/View-from-Fishermens-Bastion-to-Hungarian-Parliament-6965-X3.jpg" 
        alt="View from Fishermen's Bastion to Hungarian Parliament" 
        className="w-full h-full object-cover brightness-45"
      />

      {/* Overlay Text - Positioned Higher & Single Line */}
      <div className="absolute top-1/5 w-full text-center">
        <h1 className="text-white text-2xl sm:text-4xl font-bold whitespace-nowrap">
          Real Estate Tools and Resources
        </h1>
      </div>
    </div>
  );
};

export default ToolsAndResources;





