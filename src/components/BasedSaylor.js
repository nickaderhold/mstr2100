import React, { useState, useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const tweetIds = [
  "1903910336874311955",
  "1903905803112780220",
  "1903898489777525143",
  "1903813852283719973",
  "1903800229108830674",
  "1903781230195233169",
  "1903719487427207233",
  "1903453611524255940",
  "1903448563796828415",
  "1903256182145601789",
  "1903167395327512847",
  "1903131204519653512", // 12 tweets
];

const BasedSaylor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const visibleTweets = isMobile && !showAll ? tweetIds.slice(0, 4) : tweetIds;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-600 to-blue-700 py-10 px-4 flex flex-col items-center">
      <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-12">
        Based Saylor
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl w-full">
        {visibleTweets.map((id) => (
          <div
            key={id}
            className="bg-transparent overflow-y-scroll flex items-start justify-start rounded-lg"
            style={{ height: "300px" }}
          >
            <TwitterTweetEmbed
              tweetId={id}
              options={{ theme: "dark", width: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* View More Button (Mobile Only) */}
      {isMobile && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 bg-black text-white py-2 px-6 rounded-full text-sm shadow-md"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      )}

      {/* Full Feed Button */}
      <div className="w-full flex justify-center mt-12 mb-[-1px]">
        <a
          href="https://x.com/MSTR2100"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white text-sm md:text-base font-medium py-4 px-8 md:px-16 rounded-full w-[90%] max-w-4xl text-center shadow-lg"
        >
          Visit our full X feed
        </a>
      </div>

      {/* Extra bottom padding */}
      <div className="h-24"></div>
    </div>
  );
};

export default BasedSaylor;








