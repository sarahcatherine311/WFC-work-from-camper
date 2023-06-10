import React from 'react';
import PropTypes from 'prop-types';
import './Campsites.css';
import { Link } from 'react-router-dom';
import CampsiteCard from '../CampsiteCard/CampsiteCard';

function Campsites({ campsites, favoriteCampsite }) {
  return (
    <div className="campsites-section">
      {campsites.map(campsite => (
        <Link key={campsite.id} to={`/campsite/${campsite.id}`} style={{ textDecoration: 'none' }} > 
          <CampsiteCard campsite={campsite} favoriteCampsite={favoriteCampsite}/>
        </Link>
      ))}
    </div>
  );
};

export default Campsites;

Campsites.propTypes = {
  campsites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,  
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
    })
  ).isRequired,
  favoriteCampsite: PropTypes.func.isRequired,
};