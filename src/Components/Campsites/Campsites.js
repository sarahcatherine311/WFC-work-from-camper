import React from 'react';
import './Campsites.css';
import { Link } from 'react-router-dom';
import CampsiteCard from '../CampsiteCard/CampsiteCard';

function Campsites({ campsites }) {
  console.log(campsites)
  return (
    <div className="campsites-section">
      {campsites.map(campsite => (
        <Link key={campsite.id} to={`/campsite/${campsite.id}`} style={{ textDecoration: 'none' }} > 
          <CampsiteCard campsite={campsite}/>
        </Link>
      ))}
    </div>
  );
}

export default Campsites;
