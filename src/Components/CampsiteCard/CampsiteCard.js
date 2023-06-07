import React from 'react';
import './CampsiteCard.css';

function CampsiteCard({ campsite, favoriteCampsite }) {
  let imageSrc
  if(!campsite.images[0]) {
    imageSrc = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
  } else {
    imageSrc = campsite.images[0].url
  }

  const toggleFavorite = (campsite, event) => {
    event.preventDefault()
    if(campsite.favorited) {
      campsite.favorited = false
    } else {
      campsite.favorited = true
    }
    favoriteCampsite()
  }

  return (
    <div className="campsite-card">
      <img className="campsite-img" src={imageSrc}/>
      <button className="favorite-button" onClick={event => toggleFavorite(campsite, event)} >
        {campsite.favorited ? "❤️" : "🤍"}
      </button>
      <h3 className="campsite-name">{campsite.name}</h3>
    </div>
  );
}

export default CampsiteCard;
