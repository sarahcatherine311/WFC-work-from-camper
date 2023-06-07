import React, { useState } from 'react';
import './PhotoGallery.css'
const PhotoGallery = ({ photos }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="photo-gallery">
      <img className="details-photo" src={photos[photoIndex].url} alt={photos[photoIndex].altText} />
      <div className="gallery-navigation">
        {photos.length >= 2 && <button onClick={handlePrevPhoto}>Previous</button>}
        {photos.length >= 2 && <button onClick={handleNextPhoto}>Next</button>}
      </div>
    </div>
  );
};

export default PhotoGallery;
