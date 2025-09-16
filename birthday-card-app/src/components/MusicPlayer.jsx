import { useEffect, useRef } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked, user must click first.");
    });
  }, []);

  return (
    <div className="mt-6">
      <audio ref={audioRef} controls loop>
        <source src="/music/happy-birthday.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default MusicPlayer;
