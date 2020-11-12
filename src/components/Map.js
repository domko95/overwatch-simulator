import { PropTypes } from 'prop-types';
import styled from 'styled-components/macro';
import { getMapScore } from '../api/api';
import Mapresult from './Mapresult';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Map({ map, mapsPlayed, mapValue, setMapsPlayed }) {
  if (mapsPlayed.includes(mapValue)) {
    const scoreMap = getMapScore(mapValue);
    const scoresMap = scoreMap.split(',');
    return (
      <Container>
        <p>Score:</p>
        <div>
          <span>{scoresMap[0]}</span>
          <span>:</span>
          <span>{scoresMap[1]}</span>
        </div>
      </Container>
    );
  }
  return (
    <>
      <h3>{map.title}</h3>
      <Mapresult map={mapValue} setMapsPlayed={setMapsPlayed} />
    </>
  );
}

Map.propTypes = {
  map: PropTypes.string.isRequired,
  mapsPlayed: PropTypes.string.isRequired,
  setMapsPlayed: PropTypes.string.isRequired,
  mapValue: PropTypes.string.isRequired,
};
