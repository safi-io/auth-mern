import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl mt-7 text-center font-semibold">Sign UP</h1>
      <form action="post" className="flex flex-col gap-4 mt-7">
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex items-center gap-1 mt-5">
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
