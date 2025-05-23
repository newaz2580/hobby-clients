import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { IoMdPeople } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";
import HobbyShowCard from "./HobbyShowCard";

const HobbyCard = ({ displayData }) => {
  return (
    <>
     <h2 className="text-4xl font-bold text-center text-green-600 py-5">
             Upcoming Hobby Event
           </h2>
           <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
             {displayData.map((hobby) => (
               <HobbyShowCard key={hobby._id} hobby={hobby}></HobbyShowCard>
             ))}
           </div>
    </>
  );
};

export default HobbyCard;
