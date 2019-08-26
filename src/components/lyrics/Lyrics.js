import React from 'react';
import PropTypes from 'prop-types';


function Lyrics({ song, lyrics, artist }) {
  return (
    <section>
      <h3>{song}{artist}</h3>
      <Nav />
      <pre >{lyrics}</pre>
    </section>
  );
}

Lyrics.propTypes = {
  song: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Lyrics;
