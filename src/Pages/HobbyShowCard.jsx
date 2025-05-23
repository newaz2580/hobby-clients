import React from 'react';
import { FcViewDetails } from "react-icons/fc";
import { IoMdPeople } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";
const HobbyShowCard = ({hobby}) => {
    return (
        <div>
             <div className="mainCard card bg-base-100 dark:bg-gray-800 my-5  w-full h-96 shadow-xl rounded-xl p-2 overflow-hidden hover:shadow-2xl transition">
        <figure>
          <img
            className="w-full h-48 object-cover  rounded-xl"
            src={hobby.image}
            alt={hobby.name}
          />
        </figure>
        <div className="p-5 text-center space-y-3 ">
          <h2 className=" text text-xl font-bold  text-gray-600 dark:text-white">
            {hobby.name}
          </h2>
          <p className="text text-gray-600 dark:text-white text-sm">
            {hobby.description}
          </p>

          <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
            <MdDateRange className="text text-indigo-500" />
            <span className="text text-gray-600 dark:text-white">
              {hobby.date}
            </span>
          </div>

          <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
            <IoMdPeople className="text text-indigo-500" />
            <span className="text text-gray-600 dark:text-white">
              {hobby.members} Members
            </span>
          </div>

          <Link to={`/hobbyDetails/${hobby._id}`}>
            <button className="btn btn-primary w-full mt-2 rounded-2xl">
              <p
                className="tooltip flex items-center"
                data-tip="Please log in to view the details."
              >
                <FcViewDetails className="text-green-700" />
                View Details
              </p>
            </button>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default HobbyShowCard;