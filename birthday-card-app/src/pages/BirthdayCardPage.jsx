import ConfettiEffect from "../components/ConfettiEffect";
import Card from "../components/Card";
import Gallery from "../components/Gallery";
import MusicPlayer from "../components/MusicPlayer";

function BirthdayCardPage() {
  return (
    <div className="relative text-center p-6">
      <ConfettiEffect />
      <Card />
      <Gallery />
      <MusicPlayer />
    </div>
  );
}

export default BirthdayCardPage;
