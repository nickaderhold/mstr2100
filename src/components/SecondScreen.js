import React from "react";

export const SecondScreen = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-black py-36">
      <img
        src={`${process.env.PUBLIC_URL}/secondpage.jpg`}
        alt="Second Page"
        className="w-full max-h-[50vh] object-cover"
      />
    </div>
  );
};

export default SecondScreen;
