import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8 text-[#6E85B2]">Oops!</h1>
          <p className="text-5xl mb-8 text-[#6E85B2]">404 - Page Not Found!</p>
          <Link className="btn bg-[#3E2C41] text-[#6E85B2] btn-lg" to="/">
            <FaHome className="mr-2 text-[#6E85B2]" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
