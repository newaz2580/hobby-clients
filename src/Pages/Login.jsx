import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-4xl'>Please Login</h2>
        <fieldset className="fieldset">
         <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>Don't have an Account ? Please <Link className='text-green-600' to='/signup'>SignUP</Link></p>
        </fieldset>
      </div>
    </div>
    );
};

export default Login;