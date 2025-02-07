import React from "react";
import { IoMdMail } from "react-icons/io"; // Mail Icon
import { IoIosCall } from "react-icons/io"; // Call Icon

const agents = [
  {
    id: 1,
    name: "Ashley Mason",
    number: "1-800-7650-986",
    email: "ashley@demolink.org",
    image: "https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148141913.jpg?t=st=1739531762~exp=1739535362~hmac=64de38c619f3ebd77f4844b11ce2a8e6187e8cdbddeea80ac214aa555cb12704&w=360",
  },
  {
    id: 2,
    name: "Russell Myers",
    number: "1-800-7650-986",
    email: "russell@demolink.org",
    image: "https://img.freepik.com/free-photo/front-view-business-male-with-laptop_23-2148479543.jpg?t=st=1739532108~exp=1739535708~hmac=6f0c5b642ff62454026204e9993ba21e29e5b0f53c81095c1d30af942fba9f97&w=900",
  },
  {
    id: 3,
    name: "Shirley Vasquez",
    number: "1-800-7650-986",
    email: "shirley@demolink.org",
    image: "https://img.freepik.com/free-photo/portrait-businesswoman_23-2148137687.jpg?t=st=1739532297~exp=1739535897~hmac=8d6a8cc11de1377968d992171641150023bb9ff5da99f906ec43f0ace795aabd&w=826",
  },
  {
    id: 4,
    name: "Terry Sandoval",
    number: "1-800-7650-986",
    email: "terry@demolink.org",
    image: "https://img.freepik.com/free-photo/front-view-young-businessman-office-clothing_23-2148763859.jpg?t=st=1739532180~exp=1739535780~hmac=c5a330a3bd2c9763bcf9ad966c5572f7dd18d6893bc2b05531c6d8aa672859f8&w=826",
  },
];

const RealEstateAgents = () => {
  return (
    <div className="flex flex-col items-center my-16">
      <h1 className="text-4xl font-bold text-gray-700 my-6">Real Estate Agents</h1>
      <div className="w-24 h-1 bg-orange-400 mb-8"></div>

      <div className="grid sm:grid-cols-4 gap-25 max-w-7xl">
        {agents.map((agent) => (
          <div key={agent.id} className="flex flex-col items-center">
            {/* Square Images without Border */}
            <img
              src={agent.image}
              alt={agent.name}
              className="w-56 h-56 object-cover shadow-lg"
            />
            
            {/* Yellow Name Text */}
            <h2 className="text-xl font-semibold mt-4 text-yellow-500">{agent.name}</h2>

            {/* Call Icon with Number */}
            <p className="text-base text-gray-600 flex items-center gap-2 mt-2">
              <IoIosCall className="text-2xl text-black" /> {agent.number}
            </p>

            {/* Mail Icon with Email */}
            <p className="text-base text-gray-600 flex items-center gap-2 mt-1">
              <IoMdMail className="text-2xl text-black" /> {agent.email}
            </p>
          </div>
        ))}
      </div>

      {/* View All Agents Button */}
      <button className="bg-yellow-500 text-white px-4 py-2 text-base mt-10 hover:bg-yellow-600 transition">
        VIEW ALL AGENTS
      </button>
    </div>
  );
};

export default RealEstateAgents;
