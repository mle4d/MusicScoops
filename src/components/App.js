import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArtistSearch from '../components/containers/artistSearch';
import Search from '../components/search/search';
export default function App() {
  return (
      <>
      <Router>
        <Route exact path='/' component={Search} />
      </Router>
    </>
  );
}
  
