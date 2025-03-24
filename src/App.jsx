import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import hullBackground from './hull.jpg';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Mencoba memainkan musik saat komponen dimount
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay prevented:", err);
      }
    };
    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const containerStyle = {
    backgroundImage: `url(${hullBackground})`
  };

  const contractAddress = "7YqTcYwCp2vCrUrBT2pgz6EFBg2uFy3ShffKB5Wxpump"; // Ganti dengan contract address yang sebenarnya

  return (
    <>
      <div className="audio-player-wrapper">
        <div className="audio-player">
          <audio 
            ref={audioRef} 
            src="/cook.mp3"
            loop
            muted={false}
          />
          <div className="player-content">
            <button 
              className="audio-control"
              onClick={togglePlay}
            >
              {isPlaying ? '🎵' : '😴'}
            </button>
            <div className="audio-info">
              <div className="audio-title">
                {isPlaying ? "VIBING TO THE BEAT! 🔥" : "CLICK TO VIBE! 👆"}
              </div>
              <div className="audio-waves">
                {isPlaying && (
                  <>
                    <span className="wave">▂</span>
                    <span className="wave">▅</span>
                    <span className="wave">▂</span>
                    <span className="wave">▇</span>
                    <span className="wave">▅</span>
                    <span className="wave">▂</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="meme-container" style={containerStyle}>
        <div className="content">
          <div className="video-container">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="meme-video"
            >
              <source src="/hullvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="contract-address-container">
            <div className="contract-address wobble">
              <p className="contract-title">✨ CONTRACT ADDRESS ✨</p>
              <code className="contract-code">{contractAddress}</code>
            </div>
          </div>
          <div className="button-container">
            <a 
              href="https://x.com/ashtunhullsol/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="meme-button twitter-button bounce"
            >
              <span className="button-text">𝕏 TWITTER</span>
            </a>
            <a 
              href="https://dexscreener.com/solana/7YqTcYwCp2vCrUrBT2pgz6EFBg2uFy3ShffKB5Wxpump"
              target="_blank" 
              rel="noopener noreferrer" 
              className="meme-button buy-button shake"
            >
              <span className="button-text">BUY NOW SER</span>
            </a>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <div className="gallery-content">
          <div className="gallery-text">
            <h2 className="meme-text">FULLEW MEH MURNING RUTINE DAILY TO BECUM STRUNGER</h2>
          </div>
          <div className="gallery-grid-container">
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/saltoga1.jpg" alt="Meme 1" className="gallery-media" />
              </div>
              <div className="gallery-item">
                <img src="/sikat.jpg" alt="Meme 2" className="gallery-media" />
              </div>
              <div className="gallery-item">
                <video controls className="gallery-media">
                  <source src="/way.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="gallery-item">
                <video controls className="gallery-media">
                  <source src="/xak.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App; 