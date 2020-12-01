import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { getMapScore } from '../api/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default function Result({ map }) {
  const scoreMap = getMapScore(map);
  const scoresMap = scoreMap.split(',');
  return (
    <Container>
      <div>
        <p>
          <strong>Map-Winner:</strong>
        </p>
        <strong>{scoresMap[2]}</strong>
      </div>
      <p>Score:</p>
      <div>
        <span>{scoresMap[0]}</span>
        <span>:</span>
        <span>{scoresMap[1]}</span>
      </div>
    </Container>
  );
}

Result.propTypes = {
  map: PropTypes.string.isRequired,
};
