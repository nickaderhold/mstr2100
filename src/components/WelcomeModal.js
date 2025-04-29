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
        <h2 className="text-2xl font-bold mb-4">🚀 Welcome to MSTR2100.com v2</h2>
        <p className="text-gray-800 mb-3">
          You’ve just entered the citadel of conviction. This is the official BTC meme token.
        </p>
        <p className="text-gray-700 italic mb-4">
          Next on the roadmap? Becoming the <span className="font-semibold">memecoin with the most satoshis on Earth</span>. Currently in first round of funding now.
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


