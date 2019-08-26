import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArtistSearch from '../components/containers/artistSearch';
import Search from '../components/search/search';
import release from '../components/containers/release';
import song from '../components/containers/song';
export default function App() {
  return (
      <>
      <Router>
        <Route exact path='/' component={Search} />
        <Route exact path="/artist/:artist/:Id" component={ArtistSearch} />
        <Route path='/releases/:artist/:artistId' component={release} />
        <Route path='/songs/:artist/:releaseId/:release' component={song} />
      </Router>
    </>
  );
}
  
