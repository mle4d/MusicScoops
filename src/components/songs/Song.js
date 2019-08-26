import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Song({ song, artist }) {
  return (
    <>
      <Link to={`/lyrics/${artist}/${song}`}><h3>{songTitle}</h3></Link>
    </>
  );
}

Song.propTypes = {
  song: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Song;
