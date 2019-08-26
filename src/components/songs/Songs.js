import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songsArray, artist }) {
  const songList = songsArray.map(({ song, songId }) => (
    <li key={songId}>
      <Song 
        song={song}
        artistName={artist}
      />
    </li>
  ));

  return (
    <ul>
      {songList}
    </ul>
  );
}

Songs.propTypes = {
  songsArray: PropTypes.arrayOf(PropTypes.shape({
    song: PropTypes.string.isRequired,
    songId: PropTypes.string
  })).isRequired,
  artist: PropTypes.string.isRequired
};

export default Songs;
