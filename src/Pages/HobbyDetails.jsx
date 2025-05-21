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
    // <div className="py-5 bg-gradient-to-r from-blue-200 to-purple-200 p-6 text-black rounded-xl shadow-xl">
    //     <h2 className="text-center text-4xl font-bold">Hobby Details</h2>
    //   <div className="border ">
    //     <img className="w-80 mx-auto" src={image} alt="" />
    //     <div className="flex justify-around">
    //       <div className="space-y-3">
    //         <h2 className="text-3xl text-black"><span className="font-bold">Name</span> :{name}</h2>
    //         <h2>Date:{date}</h2>
    //         <p>{description}</p>
    //         <p>{email}</p>
    //       </div>
    //       <div className="space-y-3">
    //         <p>{location}</p>
    //         <p>{members}</p>
    //         <p>{userName}</p>
    //         <p>{category}</p>
    //       </div>
    //     </div>

    //    <div className="text-center mb-5 mt-2">
    //
    //    </div>
    //   </div>
    // </div>
    <>
      <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div>
          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 h-40 sm:h-80 dark:bg-gray-500"
          />
          <div className="flex justify-between">
            <div className="space-y-2">
              <h2 className="mb-1 text-xl font-semibold">{name}</h2>
              <p className="text-sm dark:text-gray-600">{category}</p>
              <h2 className="mb-1 text-xl font-semibold">{description}</h2>
              <p className="text-sm dark:text-gray-600">{members}</p>
            </div>
            <div>
              <h2 className="mb-1 text-xl font-semibold">{date}</h2>
              <p className="text-sm dark:text-gray-600">{location}</p>
              <h2 className="mb-1 text-xl font-semibold">{userName}</h2>
              <p className="text-sm dark:text-gray-600">Email:{email}</p>
            </div>
          </div>
          <button className="btn w-full btn-secondary">Join Group</button>
        </div>
      </div>
    </>
  );
};

export default HobbyDetails;
