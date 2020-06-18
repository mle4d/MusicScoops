import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Release({ 
  releaseCover, 
  releaseId, 
  release, 
  releaseDate = 'unknown',
  artist
}) {
  return (
    <div>
      <Link to={`/songs/${artist}/${releaseId}/${release}`}>
        <img src={releaseCover} />
        <h3>{release} - {releaseDate}</h3>
      </Link>
    </div>
  );
}

Release.propTypes = {
  releaseId: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  releaseCover: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Release;
