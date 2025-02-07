import React from "react";

const GetInTouch = () => {
  return (
    <div
      className="relative flex justify-center items-center py-16 px-6"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/clean-city-streets-prague_23-2149417744.jpg?t=st=1739539444~exp=1739543044~hmac=836eab39784748f3dcfc149966d4b571ee2a5dc88f00306fc7cf75616c5f05f4&w=900')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(60%)",
        height: "90vh",
      }}
    >
      <div className="max-w-lg w-full text-white text-center">
        {/* Heading Section */}
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        {/* Yellow Line */}
        <div className="w-10 h-1 bg-yellow-400 mx-auto mb-8"></div>

        <form className="space-y-4">
          {/* First Name & Last Name */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name:"
              className="w-1/2 p-3 bg-transparent border border-white rounded-lg placeholder-white focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Last Name:"
              className="w-1/2 p-3 bg-transparent border border-white rounded-lg placeholder-white focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone & Email */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Phone:"
              className="w-1/2 p-3 bg-transparent border border-white rounded-lg placeholder-white focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email:"
              className="w-1/2 p-3 bg-transparent border border-white rounded-lg placeholder-white focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Message Box */}
          <div>
            <textarea
              placeholder="Message:"
              className="w-full p-3 bg-transparent border border-white rounded-lg placeholder-white focus:ring-2 focus:ring-orange-400 h-24 resize-none"
            ></textarea>
          </div>

          {/* Send Message Button */}
          <button className="w-full bg-yellow-400 text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-500">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;



