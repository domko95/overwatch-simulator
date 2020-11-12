import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

export default function Mapresult({ map, setMapsPlayed, mapsPlayed }) {
  const [scoreBlue, setScoreBlue] = useState('');
  const [scoreRed, setScoreRed] = useState('');

  const handleBlueChange = (event) => {
    setScoreBlue(event.target.value);
  };

  const handleRedChange = (event) => {
    setScoreRed(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(map, [scoreBlue, scoreRed]);
    setMapsPlayed([mapsPlayed, map]);
  };

  const winner = () => {
    if (scoreBlue > scoreRed) {
      return <h3>Team Blue wins the Map</h3>;
    }
    if (scoreBlue === scoreRed) {
      return <h3>Draw</h3>;
    }
    return <h3>Team Red wins the Map</h3>;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="0"
          value={scoreBlue}
          onChange={handleBlueChange}
        />
        <input
          type="number"
          min="0"
          value={scoreRed}
          onChange={handleRedChange}
        />
        <button type="submit">Submit</button>
      </form>
      {winner()}
    </>
  );
}

Mapresult.propTypes = {
  map: PropTypes.string.isRequired,
  mapsPlayed: PropTypes.string.isRequired,
  setMapsPlayed: PropTypes.string.isRequired,
};
