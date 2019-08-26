import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArtistSearch from '../components/containers/artistSearch';
import Search from '../components/search/search';
import release from '../components/containers/release';
export default function App() {
  return (
      <>
      <Router>
        <Route exact path='/' component={Search} />
        
        <Route path='/releases/:artistName/:artistId' component={release} />
      </Router>
    </>
  );
}
  
