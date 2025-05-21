import React from "react";
import { Link, useLoaderData } from "react-router";


const AllGroup = () => {
  const data = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl text-center">All Group</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>location</th>
              <th>userName</th>
              <th>Email</th>
              <th>members</th>
              

              <th>Date</th>
              <th>button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.category}</div>
                    </div>
                  </div>
                </td>
                <td>{user.description}</td>
                <td>{user.location}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.members}</td>
                <td>{user.date}</td>



                <th>
                  
                  <Link to={`/hobbyDetails/${user._id}`}><button className="btn btn-xs">See More</button></Link>

                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllGroup;
