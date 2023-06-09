import React from 'react';
import './CampsiteCard.css';
import PropTypes from 'prop-types';

function CampsiteCard({ campsite, favoriteCampsite }) {
  let imageSrc;
  let altText = "No photo available"

  if(!campsite.images[0]) {
    imageSrc = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
    altText = campsite.images[0].altText
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
      <img className="campsite-img" src={imageSrc} alt={altText}/>
      <button className="favorite-button" onClick={event => toggleFavorite(campsite, event)} >
        {campsite.favorited ? "❤️" : "🤍"}
      </button>
      <h2 className="campsite-name">{campsite.name}</h2>
    </div>
  );
}

export default CampsiteCard;

CampsiteCard.propTypes = {
  campsite: PropTypes.shape({
    id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          altText: PropTypes.string.isRequired,
        })
      ).isRequired,  
      accessibility: PropTypes.shape({
        rvAllowed: PropTypes.string.isRequired,
        trailerAllowed: PropTypes.string.isRequired,
        rvMaxLength: PropTypes.string.isRequired,
        trailerMaxLength: PropTypes.string.isRequired,
        rvInfo:PropTypes.string,
      }).isRequired,
      amenities: PropTypes.shape({
        internetConnectivity: PropTypes.string.isRequired,
        cellPhoneReception: PropTypes.string.isRequired,
        potableWater: PropTypes.array.isRequired,
        showers: PropTypes.array.isRequired,
        laundry: PropTypes.string.isRequired,
        toilets: PropTypes.array.isRequired,
        dumpStation: PropTypes.string.isRequired,
        campStore: PropTypes.string.isRequired,
        firewoodForSale: PropTypes.string.isRequired,
        iceAvailableForSale: PropTypes.string.isRequired,
        foodStorageLockers: PropTypes.string.isRequired,
        staffOrVolunteerHostOnsite: PropTypes.string.isRequired,
      }).isRequired,
    favorited: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
