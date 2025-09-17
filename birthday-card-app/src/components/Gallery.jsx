import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = [
    "/images/keischa.jpg",
    "/images/key.jpg",
    "/images/key-kicking-ass.jpg",
    "/images/key-mardi-gras.jpg",
    "/images/key-as-a-baby.jpg",
    "/images/key-and-derrick.jpg",
  ]; // put your sister’s pics in public/images

  return (
    <div className="gallery">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Memory ${idx + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
