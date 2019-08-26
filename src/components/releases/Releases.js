import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';


function Releases({ releaseArray, artist }) {
  const releaseList = releaseArray.map(({ releaseId, releaseDate, release, coverArtCount }) => (
    <li key={releaseId}>
      <Release 
        releaseId={releaseId}
        releaseCover={coverArtCount ? `http://coverartarchive.org/release/${releaseId}/front-250` : placeholderImage }
        releaseDate={releaseDate}
        releaseTitle={release}
        artistName={artist}
      />
    </li>
  ));
  return (
    <ul>
      {releaseList}
    </ul>
  );
}

Releases.propTypes = {
  releaseArray: PropTypes.arrayOf(PropTypes.shape({
    releaseId: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    coverArtCount: PropTypes.bool.isRequired
  })).isRequired,
  artist: PropTypes.string.isRequired
};

export default Releases;
