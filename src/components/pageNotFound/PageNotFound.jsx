import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const theme = useSelector((state) => state.theme.theme);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1
        className={`text-4xl font-bold ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        } mb-4`}
      >
        404
      </h1>
      <h2
        className={`text-2xl font-semibold mb-2 ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Page Not Found
      </h2>
      <p
        className={`text-gray-500 max-w-md mb-6 ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#CFDEEA] text-[#1C1C1C] px-6 py-2 cursor-pointer rounded-lg hover:bg-[#A8C5DA] transition-colors duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default PageNotFound;
