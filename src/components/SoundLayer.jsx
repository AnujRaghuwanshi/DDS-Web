import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundLayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/sounds/mool_mantra.mp3");
    audio.loop = true;
    audio.volume = 0.3; // adjust for softness
    audioRef.current = audio;
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Some browsers block autoplay; will wait for user click
        console.log("User interaction required to start audio");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-500/70 to-yellow-400/70 hover:from-amber-400/80 hover:to-yellow-300/80 text-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}
