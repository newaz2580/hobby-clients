import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaPlusCircle } from "react-icons/fa";


const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const newHobby = Object.fromEntries(formData.entries());

    fetch("https://hobby-group-organizer-server.vercel.app/hobby", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newHobby),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Group created successfully!");
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="pb-10 px-4 max-w-5xl mx-auto">
  
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-5xl font-bold text-green-700">Start a New Hobby Group</h1>
        <p className="text text-gray-600 text-lg max-w-3xl mx-auto dark:text-white">
          Share your passion with like-minded people! Fill in the details below to
          create your own hobby group and invite others to join you.
        </p>
      </div>

      <form
        onSubmit={handleCreateGroup}
        className="bg-gray-300 shadow-xl rounded-xl p-6 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label text-gray-700 font-medium">Group Name</label>
            <input
              type="text"
              name="name"
              placeholder=" Group name"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-gray-700 font-medium">Hobby Category</label>
            <select name="category" required className="select select-bordered w-full">
              {[
                "Drawing & Painting",
                "Photography",
                "Video Gaming",
                "Fishing",
                "Running",
                "Cooking",
                "Reading",
                "Writing",
                "Arts",
                "Riding",
                "Gardening"
              ].map((opt, idx) => (
                <option key={idx} value={opt.replace(/\s+/g, "")}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label text-gray-700 font-medium">Short Description</label>
            <input
              type="text"
              name="description"
              placeholder="Describe your group..."
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-gray-700 font-medium">Meeting Location</label>
            <input
              type="text"
              name="location"
              placeholder="Where will you meet?"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-gray-700 font-medium">Max Members</label>
            <input
              type="number"
              name="members"
              placeholder=" 20"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-gray-700 font-medium">Start Date</label>
            <input
              type="date"
              name="date"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-gray-700 font-medium">Group Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Paste an image URL"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div>
          <label className="label text-gray-700 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email || ""}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`btn w-full md:w-1/2 text-lg bg-green-600 hover:bg-green-700 text-white border-0 rounded-full py-3 px-6 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Creating...
              </>
            ) : (
              <>
                
                <p className="tooltip flex items-center" data-tip="Create New Hobby Group">
               <FaPlusCircle />
                Create Group
                </p>
              </>
            )}
          </button>
  


        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
