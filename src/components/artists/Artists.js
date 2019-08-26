import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';


function Artists({ artistArray }) {
  const artistList = artistArray.map(({ Id, artist }) => (
    <li key={Id}>
      <Artist
        Id={Id}
        artist={artist}
      />
    </li>
  ));

  return (
    <ul>
      {artistList}
    </ul>
  );
}

Artists.propTypes = {
  artistArray: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  })).isRequired
};

export default Artists;
