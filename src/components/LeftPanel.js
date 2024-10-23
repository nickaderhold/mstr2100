import React from 'react';

const LeftPanel = () => {
  return (
    <div className="bg-black h-full flex items-center justify-center">
      <div className="text-center">
        <img
          src="mstr2100big.png"
          alt="MSTR Logo"
          className="h-400 w-400 mx-auto mb-4"
          style={{ animation: 'spin 3s linear infinite' }} 
        />
        <h1 className="text-white text-4xl font-bold">THERE IS NO SECOND BEST</h1>
      </div>
    </div>
  );
};

export default LeftPanel;
