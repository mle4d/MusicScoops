import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ 
  Id,
  artist 
}) {
  return (
    <>
      <Link to={`/releases/${artist}/${Id}`}><h3 >{artist}</h3></Link> 
    </>
  );
}

Artist.propTypes = {
  Id: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Artist;
