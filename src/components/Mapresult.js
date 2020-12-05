import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

const InputBlue = styled.input`
  background: #0066ff;
  ::placeholder {
    color: #222;
  }
`;

const InputRed = styled.input`
  background: #ff2222;
  ::placeholder {
    color: #222;
  }
`;

export default function Mapresult({ map, setMapsPlayed, mapsPlayed }) {
  const [scoreBlue, setScoreBlue] = useState('');
  const [scoreRed, setScoreRed] = useState('');
  const [mapWinner, setMapWinner] = useState('');
  const mapsBlue = parseFloat(localStorage.getItem('mapsBlue'));
  const mapsRed = parseFloat(localStorage.getItem('mapsRed'));

  useEffect(() => {
    localStorage.setItem(map, [scoreBlue, scoreRed, mapWinner]);
  }, [map, scoreBlue, scoreRed, mapWinner]);

  useEffect(() => {
    if (scoreBlue > scoreRed) {
      setMapWinner('blue');
      return <h3>Team Blue wins the Map</h3>;
    }
    if (scoreBlue === scoreRed) {
      setMapWinner('draw');
      return <h3>Draw</h3>;
    }
    setMapWinner('red');
    return <h3>Team Red wins the Map</h3>;
  }, [scoreBlue, scoreRed]);

  const handleBlueChange = (event) => {
    setScoreBlue(event.target.value);
  };

  const handleRedChange = (event) => {
    setScoreRed(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMapsPlayed([mapsPlayed, map]);
    if (scoreBlue > scoreRed) {
      setMapWinner('blue');
    } else if (scoreBlue === scoreRed) {
      setMapWinner('draw');
    } else {
      setMapWinner('red');
    }
    if (mapWinner === 'blue') {
      localStorage.setItem('mapsBlue', mapsBlue + 1);
    } else if (mapWinner === 'red') {
      localStorage.setItem('mapsRed', mapsRed + 1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputBlue
          type="number"
          min="0"
          value={scoreBlue}
          onChange={handleBlueChange}
          placeholder="Score blue Team"
        />
        <InputRed
          type="number"
          min="0"
          value={scoreRed}
          onChange={handleRedChange}
          placeholder="Score red Team"
        />
        <button type="submit">Submit</button>
      </form>
      {mapWinner === 'blue' ? (
        <h3>Blue wins</h3>
      ) : mapWinner === 'draw' ? (
        <h3>Draw</h3>
      ) : (
        <h3>Red wins</h3>
      )}
    </>
  );
}

Mapresult.propTypes = {
  map: PropTypes.any.isRequired,
  mapsPlayed: PropTypes.any.isRequired,
  setMapsPlayed: PropTypes.any.isRequired,
};
