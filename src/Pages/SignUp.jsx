import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { createUser,updateUser } = use(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isShow,setIsShow]=useState(false)
  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    
    
     if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain at least one lowercase letter");
    }
    setIsLoading(true);
    createUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("SignUp successful");
            navigate("/");
          })
           .catch((error) => toast.error(error.message))
          .finally(() => setIsLoading(false));
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false)
      });
  };

 
  return (
    <div className="card bg-amber-200 mx-auto w-full max-w-md  shrink-0 shadow-2xl mt-40">
      <div className="card-body">
        <h2 className="text-4xl text-center text-indigo-800 font-extrabold">Please registrar now</h2>
        <form onSubmit={handleSubmitForm} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Your name"
            required
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Photo URL"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
            required
          />
          <div className="relative">
            <label className="label">Password</label>
            <input
            type={isShow ? 'text':'password'}
            name="password"
            className="input w-full"
            placeholder="Password"
            required
          />
          <button
                type="button"
                onClick={() => setIsShow(!isShow)}
                className="absolute top-7 right-4 text-gray-600"
              >
                {isShow ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
          </div>
           <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-cyan-900 text-white text-lg font-semibold rounded-lg hover:bg-cyan-800 transition-colors flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Please wait...
              </>
            ) : (
              "Sign Up"
            )}
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
