import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Route exact path = "/">
        <Campsites />
      </Route>
    </div>
  );
}

export default App;
