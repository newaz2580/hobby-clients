import React, { use, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser,signWithGoogle } = use(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const location=useLocation()
  const navigate=useNavigate()

  
  const handleLogin = (e) => {
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    setIsLoading(true)
    loginUser(email, password)
      .then((result) => {
        toast.success(result.user);
        toast.success('Login Successful')
        navigate(location.state || "/");

      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false)
        
      }) .finally(() => {
       setIsLoading(false)
      });
  };

  const handleGoogle=()=>{
  signWithGoogle()
  .then(result=>{
    toast.success(result)
  }).catch(error=>{
    toast.error(error.message)
  })
  }
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-xl shrink-0 shadow-2xl mt-5">
      <div className="card-body">
        <h2 className="text-center text-4xl text-indigo-700 font-extrabold">Please Login</h2>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-cyan-900 text-white text-lg font-semibold rounded-lg hover:bg-cyan-800 transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
          <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            Don't have an Account ? Please{" "}
            <Link className="text-green-600" to="/signup">
              SignUP
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
