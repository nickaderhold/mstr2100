import React, { useRef } from "react";
import NewScreen from "./components/NewScreen";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import FourthScreen from "./components/FourthScreen";
import VideoSection from "./components/VideoSection";
import BasedSaylor from "./components/BasedSaylor";
import ArticlesScreen from "./components/ArticlesScreen";
import ArtGallery from "./components/ArtGallery";
import MSTRJobBoard from "./components/MstrJobBoard";
import LastPage from "./components/LastPage";
import './tailwind.css';

function App() {
  const thirdScreenRef = useRef(null);

  const scrollToThirdScreen = () => {
    if (thirdScreenRef.current) {
      thirdScreenRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="App">
      <NewScreen onMemesClick={scrollToThirdScreen} />

      <SecondScreen />

      <div ref={thirdScreenRef}>
        <ThirdScreen />
      </div>

      <FourthScreen />

      <div id="video-section">
        <VideoSection />
      </div>

      <div id="gallery">
        <ArtGallery />
      </div>

      <div id="based-saylor">
        <BasedSaylor />
      </div>

      <ArticlesScreen />
      <MSTRJobBoard />
      <LastPage />
    </div>
  );
}

export default App;























