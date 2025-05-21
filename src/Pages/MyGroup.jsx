import React, { useEffect, useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyGroup = () => {
  const initialData = useLoaderData();
  const [hobbyData,setHobbyData]=useState(initialData)
  const { user } = useContext(AuthContext);
  const [myHobbies, setMyHobbies] = useState([]);

 


  useEffect(() => {
    if (user?.email) {
      const filtered = hobbyData.filter((hobby) => hobby.email === user.email);
      setMyHobbies(filtered);
    }
  }, [hobbyData, user]);
  const handleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`http://localhost:3000/hobby/${id}`,{
    method:'DELETE'
   }).then(res=>res.json())
   .then(result=>{
    
    const remainingData=hobbyData.filter(hobby=>hobby._id !==id)
    setHobbyData(remainingData)
    console.log(result)
    Swal.fire({
      title: "Deleted!",
      text: "Hobby group has been deleted.",
      icon: "success"
    });
    
   })
  }
});
  
  }
  console.log(myHobbies);
  return (
    <div>
      <div>
        <h2 className="text-3xl">Users: {myHobbies.length}</h2>

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
       
              {myHobbies.map((user, index) => (
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
                        <div className="text-sm opacity-50">
                          {user.category}
                        </div>
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
                    <Link to={`/update/${user._id}`}> <button className="btn btn-xs">Update</button></Link>
                    <button onClick={()=>handleDelete(user._id)} className="btn btn-xs">Delete</button>
                    
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
