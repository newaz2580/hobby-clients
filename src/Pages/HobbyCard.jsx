import React from "react";
import { IoMdPeople } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";

const HobbyCard = ({ hobby }) => {
  return (
    <>
      <div className="card bg-base-100 my-5  w-full h-96 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition">
        <figure>
          <img
            className="w-full h-48 object-cover p-2 rounded-xl"
            src={hobby.image}
            alt={hobby.name}
          />
        </figure>
        <div className="p-5 text-center space-y-3">
          <h2 className=" text-xl font-bold  text-indigo-700">{hobby.name}</h2>
          <p className="text-gray-600 text-sm">{hobby.description}</p>

          <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
            <MdDateRange className="text-indigo-500" />
            <span>{hobby.date}</span>
          </div>

          <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
            <IoMdPeople className="text-indigo-500" />
            <span>{hobby.members} Members</span>
          </div>
          
          <Link to={`/hobbyDetails/${hobby._id}`}>
            <button className="btn btn-primary w-full mt-2">
                <p
            className="tooltip flex items-center"
            data-tip="Please log in to view the details."
          >
              View Details
              </p>
            </button>
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default HobbyCard;
