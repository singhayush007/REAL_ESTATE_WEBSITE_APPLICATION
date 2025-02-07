import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Brown",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Amazing service! They helped me find my dream home quickly and easily. Highly recommend!",
  },
  {
    id: 2,
    name: "James Anderson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The agents were very professional and guided me through the entire process. Excellent experience!",
  },
  {
    id: 3,
    name: "Emily Watson",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    feedback:
      "Very satisfied with the support I received. They made everything smooth and stress-free.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-700 my-6">Testimonials</h1>
      <div className="w-10 h-1 bg-orange-400 mb-8"></div>

      {/* Testimonials Grid */}
      <div className="grid sm:grid-cols-3 gap-12 max-w-7xl px-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            {/* Profile Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 object-cover rounded-full mb-4"
            />
            {/* Name */}
            <h2 className="text-xl font-semibold text-gray-700">{testimonial.name}</h2>
            {/* Feedback */}
            <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

