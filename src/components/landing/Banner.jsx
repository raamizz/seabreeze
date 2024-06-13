import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="/Images/Ship2.png"
        className="h-[400px] w-full object-cover  shadow-2xl"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-semibold text-white text-center">
          Seabreeze Fleet Management
        </h1>
      </div>
    </div>
  );
};

export default Banner;