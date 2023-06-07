import { React, useState, useEffect } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Campsites from '../Campsites/Campsites';
import CampsiteDetails from '../CampsiteDetails/CampsiteDetails';
import { getCampsites } from '../../ApiCalls';

function App() {
  const [campsites, setCampsites] = useState([])
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCampsites();
        const filteredData = data.data.filter(campsite => {
          if(campsite.amenities) {
            return  campsite.amenities.internetConnectivity.includes("Yes")
          }
        })
        setCampsites(filteredData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const favoriteCampsite = () => {
    setFavorites(campsites.filter(campsite => campsite.favorited === true))
  }

  return (
    <div className="app">
      <Header />
      <Route exact path = "/favorites">
      <Link to="/">
        <button>See All Campsites</button>
      </Link>
        <Campsites campsites={favorites} favoriteCampsite={favoriteCampsite}/>
      </Route>
      <Route exact path = "/campsite/:id">
        <CampsiteDetails campsites={campsites}/>
      </Route>
      <Route exact path = "/">
      <Link to="/favorites">
        <button>See Favorite Campsites</button>
      </Link>
        <Campsites campsites={campsites} favoriteCampsite={favoriteCampsite}/>
      </Route>
    </div>
  );
}

export default App;
