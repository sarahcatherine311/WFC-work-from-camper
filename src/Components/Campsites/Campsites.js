import React from 'react';
import './Campsites.css';
import { Link } from 'react-router-dom';
import CampsiteCard from '../CampsiteCard/CampsiteCard';

function Campsites({ campsites }) {
  return (
    <div className="campsites-section">
      {campsites.map(campsite => <CampsiteCard key={campsite.id} campsite={campsite}/>)}
    </div>
  );
}

export default Campsites;
