import React, { useState, use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const Update = () => {
  const { user } = use(AuthContext);
  const updateData = useLoaderData();
  const { _id, name, category, date, description, image, location, members } = updateData;
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const updateHobby = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/hobby/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateHobby),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("✅ Group updated successfully!");
      })
      .catch(() => toast.error(" Failed to update group"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Update Group</h1>
        <p className="text-gray-600 mt-2">Make changes to your hobby group below.</p>
      </div>

      <form onSubmit={handleUpdate} className="bg-white shadow-lg rounded-xl p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold">Group Name</label>
            <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="font-semibold">Hobby Category</label>
            <select name="category" defaultValue={category} className="select select-bordered w-full" required>
              <option value="Drawing&Painting">Drawing & Painting</option>
              <option value="Photography">Photography</option>
              <option value="VideoGaming">Video Gaming</option>
              <option value="Fishing">Fishing</option>
              <option value="Running">Running</option>
              <option value="Cooking">Cooking</option>
              <option value="Reading">Reading</option>
              <option value="Writing">Writing</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Description</label>
            <input type="text" name="description" defaultValue={description} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="font-semibold">Meeting Location</label>
            <input type="text" name="location" defaultValue={location} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="font-semibold">Max Members</label>
            <input type="number" name="members" defaultValue={members} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="font-semibold">Start Date</label>
            <input type="date" name="date" defaultValue={date} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="font-semibold">Image URL</label>
            <input type="text" name="image" defaultValue={image} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="font-semibold">User Name</label>
            <input type="text" name="userName" value={user?.displayName} readOnly className="input input-bordered w-full bg-gray-100" />
          </div>
        </div>

        <div>
          <label className="font-semibold ">User Email</label>
          <input type="email" name="email" value={user?.email} readOnly className=" outline-0  input input-bordered w-full bg-gray-100" />
        </div>

        <button
          type="submit"
          className="btn w-full bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span> Updating...
            </>
          ) : (
            "Update Group"
          )}
        </button>
      </form>
    </div>
  );
};

export default Update;
