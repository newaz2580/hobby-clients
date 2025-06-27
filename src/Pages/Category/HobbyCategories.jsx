import React, { useState } from "react";
import {
  FaPaintBrush,
  FaBicycle,
  FaCameraRetro,
  FaChessKnight,
  FaSeedling,
  FaBook,
  FaFish,
  FaHiking,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Painting",
    icon: <FaPaintBrush size={30} className="text-indigo-600" />,
    description: "Express your creativity with colors and brushes.",
    details: "Join painting workshops, share your art, and get inspired by other artists in your community.",
  },
  {
    id: 2,
    name: "Cycling",
    icon: <FaBicycle size={30} className="text-green-600" />,
    description: "Ride with like-minded fitness and adventure lovers.",
    details: "Explore local routes, organize group rides, and stay healthy together.",
  },
  {
    id: 3,
    name: "Photography",
    icon: <FaCameraRetro size={30} className="text-yellow-600" />,
    description: "Capture moments and master your camera skills.",
    details: "Photo walks, editing tips, and gear discussions await photography enthusiasts.",
  },
  {
    id: 4,
    name: "Chess",
    icon: <FaChessKnight size={30} className="text-purple-600" />,
    description: "Challenge minds and enjoy strategic fun.",
    details: "Tournaments, casual matches, and strategy sessions with fellow thinkers.",
  },
  {
    id: 5,
    name: "Gardening",
    icon: <FaSeedling size={30} className="text-teal-600" />,
    description: "Grow plants, herbs, and joy with a green thumb.",
    details: "Swap plants, join urban farming meetups, and share tips for indoor and outdoor gardening.",
  },
  {
    id: 6,
    name: "Reading",
    icon: <FaBook size={30} className="text-red-600" />,
    description: "Discover new worlds through the pages of books.",
    details: "Book clubs, reviews, and reading challenges for fiction and non-fiction lovers.",
  },
  {
    id: 7,
    name: "Fishing",
    icon: <FaFish size={30} className="text-blue-600" />,
    description: "Relax by the water with group fishing trips.",
    details: "Weekend fishing trips, gear tips, and nature retreats with fellow anglers.",
  },
  {
    id: 8,
    name: "Traveling",
    icon: <FaHiking size={30} className="text-orange-600" />,
    description: "Explore beautiful places together across the country.",
    details: "Plan budget-friendly group tours, share travel stories, and discover hidden gems.",
  },
];

const HobbyCategories = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-full mx-auto  py-5">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary dark:text-white">
        Explore Hobby Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setSelected(cat)}
            className="cursor-pointer flex flex-col items-center p-6 bg-white dark:bg-gray-700  rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 text-center"
          >
            <div className="mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{cat.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-200">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
     {selected && (
  <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 relative animate-fade-in">
      {/* Close Button */}
      <button
        onClick={() => setSelected(null)}
        className="absolute top-2 right-3 text-lg font-bold text-gray-600 hover:text-red-500"
      >
        ✕
      </button>

      {/* Modal Content */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{selected.icon}</div>
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
          {selected.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {selected.details}
        </p>

        {/* Optional: Hobby Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="badge badge-outline badge-primary">Community</span>
          <span className="badge badge-outline badge-accent">Weekly Meet</span>
          <span className="badge badge-outline badge-secondary">Fun & Learning</span>
        </div>

        {/* Section: What You Get */}
        <div className="mt-5 text-left w-full">
          <h4 className="font-semibold text-gray-700 dark:text-white mb-2">What You'll Experience</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>Connect with like-minded people</li>
            <li>Attend local and online meetups</li>
            <li>Share your work and get feedback</li>
            <li>Participate in group events and contests</li>
          </ul>
        </div>

        {/* Join Button */}
        <button
          onClick={() => alert(`You joined the ${selected.name} group!`)}
          className="mt-6 btn btn-primary btn-sm"
        >
          Join {selected.name} Group
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default HobbyCategories;
