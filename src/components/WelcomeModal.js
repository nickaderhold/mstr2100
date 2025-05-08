import React, { useState, useEffect } from 'react';

const WelcomeModal = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log('Modal useEffect ran'); // debug log
    // You can re-add sessionStorage logic later once it works
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">
          🚀 BREAKING: #MSTR2100 – the official bitcoin memecoin is going FULL SAYLOR MODE 🚀
        </h2>
        <p className="text-gray-800 mb-3">
          We have launched a community-funded <span className="font-semibold">Strategic Bitcoin Reserve</span>, matching EVERY satoshi that <span className="font-mono">@Strategy</span> holds in $BTC!
        </p>
        <p className="text-gray-700 italic mb-4">
          This is just the beginning – we’ll mirror ALL of Saylor’s future #bitcoin buys in satoshis.<br />
          <span className="font-semibold">@MSTR2100</span> has acquired <span className="font-mono">555,450</span> satoshis as of today.
        </p>
        <button
          onClick={() => {
            console.log('Modal closed'); // debug log
            setShow(false);
          }}
          className="mt-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Stack On
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;



