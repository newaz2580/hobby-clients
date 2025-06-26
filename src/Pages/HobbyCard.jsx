import React from "react";

import HobbyShowCard from "./HobbyShowCard";

const HobbyCard = ({ displayData }) => {
  return (
    <>
     <h2 className="font-bold text-4xl text-center text-blue-800 py-5">
             Upcoming Hobby Event
           </h2>
           <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {displayData.map((hobby) => (
               <HobbyShowCard key={hobby._id} hobby={hobby}></HobbyShowCard>
             ))}
           </div>
    </>
  );
};

export default HobbyCard;
