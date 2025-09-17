import { useEffect, useRef } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked, user must click first.");
    });
  }, []);

  return (
    <div className="music-player">
      <audio ref={audioRef} controls loop>
        <source src="/music/birthday-song.m4a" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default MusicPlayer;
