import React, { useEffect, useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const MyGroup = () => {
  const initialData = useLoaderData();
  const [hobbyData, setHobbyData] = useState(initialData);
  const { user } = useContext(AuthContext);
  const [myHobbies, setMyHobbies] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const filtered = hobbyData.filter((hobby) => hobby.email === user.email);
      setMyHobbies(filtered);
    }
  }, [hobbyData, user]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/hobby/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            const remainingData = hobbyData.filter((hobby) => hobby._id !== id);
            setHobbyData(remainingData);
            console.log(result);
            Swal.fire({
              title: "Deleted!",
              text: "Hobby has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  console.log(myHobbies);
  return (
    <div>
      <div className="shadow-2xl">
        
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-6 mt-3">My Hobby Groups</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr className="text-xl">
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Location</th>

                <th>Email</th>
                <th>Members</th>

                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myHobbies.map((user, index) => (
                <tr key={user._id} className="hover:shadow-xl">
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
                        <div className="font-bold text-blue-500">
                          {user.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {user.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold text-cyan-400">{user.description}</td>
                  <td className="text-blue-600 font-bold py-5">{user.location}</td>

                  <td className="font-bold py-4">{user.email}</td>
                  <td>{user.members}</td>
                  <td className="text-shadow-teal-600">{user.date}</td>

                  <th className="flex gap-2">
                    <Link to={`/update/${user._id}`}>
                      {" "}
                      <button className="btn btn-md bg-cyan-600 text-white text-md">
                        <CiEdit size={18} />
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-md bg-blue-700 text-white"
                    >
                      <MdDelete size={20} className="text-red-600" />
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGroup;
