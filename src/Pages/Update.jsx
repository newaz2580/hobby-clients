 import React, { use } from "react";
        import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
const Update = () => {
const {user}=use(AuthContext)
const updateData=useLoaderData()
const {_id,name,category,date,description,image,location,members}=updateData
const handleUpdate=(e)=>{
e.preventDefault()
    const form=e.target
    const formData=new FormData(form)
    const updateHobby=Object.fromEntries(formData.entries())
    console.log(updateHobby)

    fetch(`http://localhost:3000/hobby/${_id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(updateHobby)
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
    })
}
        
        
          return (
            <div className="p-24">
              <div className="p-12 text-center space-y-4">
                <h1 className="text-6xl">Add New Group</h1>
                <p>
                  It is a long established fact that a reader will be distraceted by the
                  readable content of a page when looking at its layout. The point of
                  using Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using Content here.
                </p>
              </div>
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Group Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input w-full"
                      placeholder="Group Name"
                      defaultValue={name}
                    />
                  </fieldset>
                  <fieldset className="fieldset border-base-300 rounded-box border p-4">
                    <label className="label">Hobby Category</label>
                    <div className="dropdown dropdown-start ">
                      
                        <select name="category" defaultValue={category}>
                          <option  value="Drawing&Painting">Drawing & Painting</option>
                          <option value="Photography">Photography</option>
                          <option value="VideoGaming">Video Gaming</option>
                          <option value="Fishing">Fishing</option>
                          <option value="Running">Running</option>
                          <option value="Cooking">Cooking</option>
                          <option value="Reading">Reading</option>
                          <option value="Writing">Writing</option>
                          
                        </select>
                    </div>
                  </fieldset>
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Description</label>
                    <input
                      type="text"
                      name="description"
                      className="input w-full"
                      placeholder="Add Description"
                      defaultValue={description}
                    />
                  </fieldset>
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Meeting Location</label>
                    <input
                      type="text"
                      name="location"
                      className="input w-full"
                      placeholder="Meeting Location"
                      defaultValue={location}
                    />
                  </fieldset>
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Max Members</label>
                    <input
                      type="text"
                      name="members"
                      className="input w-full"
                      placeholder="Max Members"
                      defaultValue={members}
                    />
                  </fieldset>
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Start Date </label>
                    <input type="date" defaultValue={date} className="input w-full" name="date" />
                  </fieldset>
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Image</label>
                    <input
                      type="text"
                      name="image"
                      className="input w-full"
                      placeholder="Image URL"
                      defaultValue={image}
                    />
                  </fieldset>
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">User Name</label>
                    <input
                      type="text"
                      name="userName"
                      className="input w-full"
                      placeholder="User Name"
                      value={user?.displayName}

                    />
                  </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                  <label className="label">User Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user?.email}
                    className="input w-full"
                    placeholder="User Email"
                  />
                </fieldset>
        
                <input type="submit" className="btn w-full" value="Update Group" />
              </form>
            </div>
          );
        };
        

        
    


export default Update;