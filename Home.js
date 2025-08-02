// ✅ Modern User Cards App - Home Page

import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.jpeg";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-lg max-w-3xl w-full p-8 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-4">
          Welcome 👋
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Discover beautiful user profiles with just one click ✨
        </p>
        <Link
          to="/users"
          className="inline-block bg-purple-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-600 transition duration-300"
        >
          Explore Users
        </Link>
      </div>
      <img
        src={homeImg}
        alt="Home Visual"
        className="mt-10 max-w-md w-full rounded-2xl shadow-xl border-4 border-purple-200"
      />
    </div>
  );
}

export default Home;
