import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser,updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    
    
    //  if (password.length < 6) {
    //   return toast.error("Password must be at least 6 characters");
    // }
    // if (!/[A-Z]/.test(password)) {
    //   return toast.error("Password must contain at least one uppercase letter");
    // }
    // if (!/[a-z]/.test(password)) {
    //   return toast.error("Password must contain at least one lowercase letter");
    // }

    createUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("SignUp successful");
            navigate("/");
          })
          .catch((error) => toast.error(error.message))
      })
      .catch((error) => {
        toast.error(error);
      });
  };

 
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-4xl text-center">Please SignUP</h2>
        <form onSubmit={handleSubmitForm} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your name"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            SignUP
          </button>
          
          <p>
            Already have an Account ? Please{" "}
            <Link className="text-green-600" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
