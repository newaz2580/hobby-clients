import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const CreateGroup = () => {
    const {user}=use(AuthContext)
    console.log(user)
  const handleCreateGroup = (e) => {
    e.preventDefault()
    const form=e.target
    const formData=new FormData(form)
    const newHobby=Object.fromEntries(formData.entries())
    console.log(newHobby)
    fetch('http://localhost:3000/hobby',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(newHobby)
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
    })
  };
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
      <form onSubmit={handleCreateGroup}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Group Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Group Name"
            />
          </fieldset>
          <fieldset className="fieldset border-base-300 rounded-box border p-4">
            <label className="label">Hobby Category</label>
            <div className="dropdown dropdown-start ">
              
                <select name="category">
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
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Meeting Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Meeting Location"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Max Members</label>
            <input
              type="text"
              name="members"
              className="input w-full"
              placeholder="Max Members"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Start Date </label>
            <input type="date" className="input w-full" name="date" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Image</label>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="Image URL"
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

        <input type="submit" className="btn w-full" value="Create Group" />
      </form>
    </div>
  );
};

export default CreateGroup;
