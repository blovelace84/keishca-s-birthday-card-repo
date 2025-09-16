import React from "react";

function Gallery() {
  const images = [
    "/images/keischa.jpg",
    "/images/key.jpg",
    "/images/key-kicking-ass.jpg",
    "/images/key-mardi-gras.jpg",
  ]; // put your sister’s pics in public/images

  return (
    <div className="mt-8 flex gap-4 justify-center flex-wrap">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Memory ${idx + 1}`}
          className="w-32 h-32 object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  );
}

export default Gallery;
