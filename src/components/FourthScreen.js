import React from "react";

export const FourthScreen = () => {
  return (
    <div className="w-screen flex flex-col items-center bg-black">
      {/* Orange1 Image */}
      <img
        src={`${process.env.PUBLIC_URL}/orange1.jpg`}
        alt="Orange 1"
        className="w-full max-w-screen object-cover"
      />
      <img
        src={`${process.env.PUBLIC_URL}/orange3.jpg`}
        alt="Orange 1"
        className="w-full max-w-screen object-cover"
      />

      {/* Orange2 Image */}
      <img
        src={`${process.env.PUBLIC_URL}/orange2.jpg`}
        alt="Orange 2"
        className="w-full max-w-screen object-cover"
      />
    </div>
  );
};

export default FourthScreen;
