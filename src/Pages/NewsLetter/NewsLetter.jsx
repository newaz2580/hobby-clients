import React, { useState } from "react";
import { toast } from "react-hot-toast";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // simulate success
    toast.success("Subscribed successfully! 🎉");
    setEmail(""); // clear input
  };

  return (
    <div className="bg-base-200 dark:bg-gray-800 py-10 px-6 rounded-xl my-10 shadow-md">
      <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">📬 Subscribe to Our Newsletter</h2>
      <p className="text-center mb-2 text-gray-600 dark:text-gray-300">
        Stay updated with hobby meetups, group events, new blogs, and exclusive offers!
      </p>
      <p className="text-center mb-6 text-sm text-gray-500 dark:text-gray-100">
        We send only 1 email per week. No spam, ever.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-sm"
        />
        <button className="btn btn-primary" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
