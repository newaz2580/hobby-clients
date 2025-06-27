import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const AllGroup = () => {
  const data = useLoaderData();
  const [sortType, setSortType] = useState("default");

  // Sorting function based on selected sortType
  const sortedData = [...data].sort((a, b) => {
    if (sortType === "name-asc") return a.name.localeCompare(b.name);
    if (sortType === "name-desc") return b.name.localeCompare(a.name);
    if (sortType === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sortType === "date-desc") return new Date(b.date) - new Date(a.date);

    return 0; // default: no sorting
  });

  return (
    <div className="max-w-11/12 mx-auto  py-6">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">
        All Hobby Groups
      </h2>
      <div className="flex justify-end mb-4">
        <select
          className="select select-sm border border-purple-400"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="default" disabled>
            Sort By
          </option>
          <option value="name-asc">Name A - Z</option>
          <option value="name-desc">Name Z - A</option>
          <option value="date-desc">Newest</option>
          <option value="date-asc">Oldest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {sortedData.map((group) => (
          <div
            key={group._id}
            className="card bg-base-100 dark:bg-gray-800 shadow-xl border border-purple-200 hover:shadow-2xl transition-all"
          >
            <figure>
              <img
                src={group.image}
                alt={group.name}
                className="h-36 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold text-indigo-800 dark:text-white">{group.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-3 dark:text-white">{group.description}</p>
              <div className=" space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold text-teal-700">📅 Date:</span>{" "}
                  {group.date}
                </p>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/hobbyDetails/${group._id}`}>
                  <button className="btn btn-sm bg-cyan-800 text-white hover:bg-cyan-600 flex items-center gap-2">
                    <span>See More</span>
                    <IoMdArrowForward size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
