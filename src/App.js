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
import HoldingsComparison from "./components/HoldingComparison";
import WelcomeModal from "./components/WelcomeModal";
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
      <WelcomeModal />



      <NewScreen onMemesClick={scrollToThirdScreen} />
      <SecondScreen />
      <HoldingsComparison />
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























