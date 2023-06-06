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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCampsites();
        setCampsites(data.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="app">
      <Header />
      <Route exact path = "/campsite/:id">
        <CampsiteDetails campsites={campsites}/>
      </Route>
      <Route exact path = "/">
        <Campsites campsites={campsites}/>
      </Route>
    </div>
  );
}

export default App;
