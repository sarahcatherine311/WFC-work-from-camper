import React from 'react';
import './Campsites.css';
import { Link } from 'react-router-dom';
import CampsiteCard from '../CampsiteCard/CampsiteCard';

function Campsites() {
  return (
    <div className="campsites-section">
      <CampsiteCard/>
    </div>
  );
}

export default Campsites;
