import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <div className="relative h-[400px] w-full overflow-hidden shadow-2xl">
        <img
          src="/Images/Ship2.png"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      </div>
      <div className="absolute inset-0 flex flex-col gap-2 items-center text-center text-white justify-center">
        <h1 className="md:text-4xl text-2xl font-semibold  text-center uppercase">
          Sea breeze Fleet Management
        </h1>
        <h3>Efficient ship management services for your fleet</h3>
      </div>
    </div>
  );
};

export default Banner;
