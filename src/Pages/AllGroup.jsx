import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const AllGroup = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text text-4xl font-bold text-center text-purple-700 mb-6">
        All Hobby Groups
      </h2>

      <div className="overflow-x-auto shadow-2xl rounded-lg border border-purple-200">
        <table className="table w-full">
          <thead>
            <tr className="text-black dark:text-white bg-amber-600 dark:bg-black">
              <th className="py-4 px-2">No</th>
              <th className="py-4 px-2">Name</th>
              <th className="py-4 px-2">Description</th>
              <th className="py-4 px-2">Location</th>
              <th className="py-4 px-2">Members</th>
              <th className="py-4 px-2">Date</th>
              <th className="py-4 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr
                key={user._id}
                className=" transition duration-200 ease-in-out"
              >
                <td className="text-center font-semibold">{index + 1}</td>

                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                    <div>
                      <div className="text font-bold text-indigo-800 dark:text-cyan-300">
                        {user.name}
                      </div>
                      <div className="text text-xs text-indigo-800 dark:text-white">
                        {user.category}
                      </div>
                    </div>
                  </div>
                </td>

                <td className=" text-sm text-indigo-600 dark:text-white font-medium">
                  {user.description}
                </td>
                <td className=" text-sm text-teal-700 dark:text-white font-medium">
                  {user.location}
                </td>
                <td className="text-center font-bold text-teal-700 dark:text-white">
                  {user.members}
                </td>
                <td className=" text-green-700 font-medium dark:text-orange-400">{user.date}</td>

                <td>
                  <Link to={`/hobbyDetails/${user._id}`}>
                    <button className="btn btn-sm flex items-center gap-2 rounded-full bg-cyan-800 text-white hover:bg-cyan-600 px-4 py-2">
                      <span>See More</span>
                      <IoMdArrowForward size={18} />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllGroup;
