import React from "react";

const LastPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#000000] p-0 m-0">
      <img
        src={`${process.env.PUBLIC_URL}/lastpage.jpg`}
        alt="Last Page"
        className="w-full h-auto max-w-none"
        style={{
          display: 'block',
        }}
      />
    </div>
  );
};

export default LastPage;



