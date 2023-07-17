import { Link } from "react-router-dom";
import logo from "../../assets/twitter-white.png";
import React from "react";

const Auth: React.FC = () => {
    return (
        <>
          <img src={logo} alt="logo" className="w-20 h-16" />
          <h1 className="text-4xl font-bold text-white mt-8">
              See what's happening in the world right now
          </h1>

          <h1 className="text-xl font-semibold text-white mt-10">
              Join twitter today.
          </h1>
          <Link to="/auth/register">
            <button className="rounded-full bg-emerald-500 w-full text-xl font-semibold text-black p-2 mt-5">
                Sign Up
            </button>
          </Link>
          <Link to="/auth/login">
            <button className="rounded-full border border-emerald-500 w-full text-xl font-semibold text-emerald-500 p-2 mt-5">
                Login
            </button>
          </Link>
        </>
    );
}

export default Auth