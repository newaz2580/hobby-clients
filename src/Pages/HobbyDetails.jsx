import React from "react";
import { FaListUl, FaRegFileAlt, FaUserCircle } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdDateRange, MdEmail, MdLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router";

const HobbyDetails = () => {
  const hobbyData = useLoaderData();
  const {
    name,
    image,
    category,
    date,
    description,
    email,
    location,
    members,
    userName,
  } = hobbyData;

  return (
    
    <>
     <div className="max-w-3xl mx-auto rounded-xl py-10 mt-5 overflow-hidden shadow-lg bg-gradient-to-r from-indigo-100 to-purple-100 transition-all hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
       
          <div className="space-y-3 flex-1 text-gray-800">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-indigo-700">
              <FaUserCircle className="text-indigo-500" /> {name}
            </h2>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <FaListUl className="text-indigo-500" /> {category}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaRegFileAlt className="text-indigo-500" /> {description}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <IoMdPeople className="text-indigo-500" /> {members} Members
            </div>
          </div>

        
          <div className="space-y-3 justify-start md:text-left flex-1 text-gray-800">
            <p className="flex items-center  justify-start gap-2 text-lg font-semibold text-purple-700">
              <MdDateRange className="text-purple-500" /> {date}
            </p>
            <p className="flex items-center  justify-start gap-2 text-sm text-gray-700">
              <MdLocationOn className="text-purple-500" /> {location}
            </p>
            <p className="flex items-center  justify-start gap-2 text-md font-medium text-gray-800">
              <FaUserCircle className="text-purple-500" /> {userName}
            </p>
            <div className="flex items-center  justify-start gap-2 text-sm text-gray-700">
              <MdEmail className="text-purple-500" /> {email}
            </div>
          </div>
        </div>

    
        <button className="w-full py-3 mt-3 text-white font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all">
          Join Group
        </button>
      </div>
    </div>

    </>
  );
};

export default HobbyDetails;
