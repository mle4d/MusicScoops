import React from 'react';
import PropTypes from 'prop-types';


function Search({ artist, inputChange, onClick }) {
  return (
    <div>
      <input type='text' name='artist' value={artist} onChange={inputChange} />
      <button onClick={onClick}>Search</button>
    </div>
  );
}

Search.propTypes = {
  artist: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Search;
