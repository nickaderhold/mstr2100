import React from 'react';

const StorySection = () => {
  return (
    <div className="bg-black text-white h-full flex flex-col items-start justify-start p-6">
      <div>
        <h2 className="text-3xl font-bold mb-4">Lore</h2>
        <div className="story-item mb-6">
          <h3 className="text-xl font-semibold mb-2">The 5 FOOT Midget Developer</h3>
          <p>
            We hit the damn moon. MSTR peaked at a glorious 37 million market cap, everyone thought we were unstoppable. Then, out of nowhere, our sneaky developer decided to dump his fat 60% bag. Like a stone thrown into a lake, we sank, plummeting to a measly 6 million. The wildest part? Every time he sold, the guy SHRUNK. He was 5 feet tall when he started, but now? He’s a tiny, angry 3-foot midget, still selling his damn bag. Every time the market tries to rise, he shrinks a bit more. Soon, he'll disappear into thin air with what’s left of his supply!
          </p>
        </div>
        {/* Video Section */}
        <div className="video-container mt-4">
          <video width="640" height="360" controls>
            <source src="img_1192.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default StorySection;

