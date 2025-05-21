import React from "react";
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
    <div className="my-5 bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white rounded-xl">
        <h2 className="text-center text-4xl font-bold">Hobby Details</h2>
      <div className="border max-w-10/12 mx-auto">
        <img className="w-80 mx-auto" src={image} alt="" />
        <div className="flex justify-around border">
          <div className="space-y-3">
            <h2 className="text-3xl text-black"><span className="font-bold">Name</span> :{name}</h2>
            <h2>Date:{date}</h2>
            <p>{description}</p>
            <p>{email}</p>
          </div>
          <div>
            <p>{location}</p>
            <p>{members}</p>
            <p>{userName}</p>
            <p>{category}</p>
          </div>
        </div>

       <div className="text-center my-5">
         <button className="btn w-full btn-secondary">Join Group</button>
       </div>
      </div>
    </div>
  );
};

export default HobbyDetails;
