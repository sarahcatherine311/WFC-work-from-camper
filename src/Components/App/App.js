import { React, useState, useEffect } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Campsites from '../Campsites/Campsites';
import CampsiteDetails from '../CampsiteDetails/CampsiteDetails';
import { getCampsites } from '../../ApiCalls';
import filterCampsitesByInternetConnectivity from '../../utils';

function App() {
  const [campsites, setCampsites] = useState([])
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCampsites();
        const filteredData = filterCampsitesByInternetConnectivity(data.data);
        setCampsites(filteredData);
        setLoading(false)
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const favoriteCampsite = () => {
    setFavorites(campsites.filter(campsite => campsite.favorited === true))
  }

  if(error) {
    return (
      <div>
        <Header />
        <h2 className="error-message">{error.message}</h2>
      </div>
    )
  } else if(loading) {
    return (
      <div>
        <Header />
        <h2 className="loading-message">Loading... </h2>
      </div>
      )
  } else {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path = "/favorites">
          <Link to="/">
            <button className='see-all-button'>See All Campsites</button>
          </Link>
            <Campsites campsites={favorites} favoriteCampsite={favoriteCampsite}/>
          </Route>
          <Route exact path = "/campsite/:id">
            <CampsiteDetails campsites={campsites}/>
          </Route>
          <Route exact path = "/">
          <Link to="/favorites">
            <button className='see-favorites-button'>See Favorite Campsites</button>
          </Link>
            <Campsites campsites={campsites} favoriteCampsite={favoriteCampsite}/>
          </Route>
          <Route path="*" render={() => <h2 className="error-message">Sorry, you went down the wrong path!</h2>}/>
        </Switch>
      </div>
    );
  };
};

export default App;