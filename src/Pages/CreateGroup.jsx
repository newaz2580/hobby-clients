import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaPlusCircle } from "react-icons/fa";

const CreateGroup = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const newHobby = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/hobby", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newHobby),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("🎉 Group created successfully!");
        form.reset();
      })
      .catch((err) => {
        toast.error("❌ Failed to create group. Try again.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="pb-10 px-4 max-w-5xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-5xl font-bold text-green-700">Start a New Hobby Group</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Share your passion with like-minded people! Fill in the details below to
          create your own hobby group and invite others to join you.
        </p>
      </div>

      <form
        onSubmit={handleCreateGroup}
        className="bg-white shadow-xl rounded-xl p-6 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Group Name" name="name" placeholder="e.g., Nature Explorers" required />
          <Select
            label="Hobby Category"
            name="category"
            options={[
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
            ]}
            required
          />
          <Input label="Short Description" name="description" placeholder="Describe your group..." required />
          <Input label="Meeting Location" name="location" placeholder="Where will you meet?" required />
          <Input label="Max Members" name="members" type="number" placeholder="e.g., 20" required />
          <Input label="Start Date" name="date" type="date" required />
          <Input label="Group Image URL" name="image" placeholder="Paste an image URL" required />
          <Input label="Your Name" name="userName" value={user?.displayName || ""} readOnly />
        </div>

        <Input label="Your Email" name="email" value={user?.email || ""} readOnly />

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
                <FaPlusCircle />
                Create Group
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable Input component
const Input = ({ label, name, type = "text", placeholder, value, readOnly, required }) => (
  <div>
    <label className="label text-gray-700 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={value}
      readOnly={readOnly}
      required={required}
      className="input input-bordered w-full"
    />
  </div>
);

// Reusable Select component
const Select = ({ label, name, options, required }) => (
  <div>
    <label className="label text-gray-700 font-medium">{label}</label>
    <select name={name} required={required} className="select select-bordered w-full">
      {options.map((opt, idx) => (
        <option key={idx} value={opt.replace(/\s+/g, "")}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default CreateGroup;
