import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import styled from 'styled-components';
import { getMapById, getRoleById, getTeamById, getTeams } from '../api/api';
import getRandomInt from '../utils/random';
import Map from './Map';
import Result from './Result';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  border: 1px solid black;
  margin-top: 20px;
`;

const Td = styled.td`
  border: 1px solid black;
`;

const TeamItem = styled.p`
  border-radius: 10px;
  margin-top: 10px;
  padding: 0.5rem;
  background: black;
  color: orange;
  box-shadow: 0 10px 20px orange;
  text-decoration: none;
`;

export default function Match() {
  const name = localStorage.getItem('name');
  const [mapsPlayed, setMapsPlayed] = useState([]);
  const [mapsBlue, setMapsBlue] = useState('');
  const [mapsRed, setMapsRed] = useState('');
  const [matchStatus, setMatchStatus] = useState('inProgress');
  const [matchWinner, setMatchWinner] = useState('');

  const [role, setRole] = useState([]);
  const roleId = localStorage.getItem('role');
  useEffect(async () => {
    const newRole = await getRoleById(roleId);
    setRole(newRole);
  }, []);

  const teamId = localStorage.getItem('region');
  const [team, setTeam] = useState([]);
  useEffect(async () => {
    const newTeam = await getTeamById(teamId);
    setTeam(newTeam);
  }, []);

  const [teams, setTeams] = useState([]);
  useEffect(async () => {
    const newTeams = await getTeams();
    setTeams(newTeams);
  }, []);

  const [map, setMap] = useState([]);
  useEffect(async () => {
    setMapsBlue(localStorage.getItem('mapsBlue'));
    setMapsRed(localStorage.getItem('mapsRed'));
    if (mapsBlue === '3' || mapsRed === '3') {
      setMatchStatus('finished');
    }
    if (matchStatus === 'finished') {
      if (mapsBlue === '3') {
        setMatchWinner('blue');
      } else {
        setMatchWinner('red');
      }
    }
    if (mapsPlayed.includes('map1') && matchStatus !== 'finished') {
      const mapId = getRandomInt(5);
      const newMap = await getMapById({ type: 'hybrid', mapId });
      setMap(newMap);
    } else if (mapsPlayed.includes('map2') && matchStatus !== 'finished') {
      const mapId = getRandomInt(3);
      const newMap = await getMapById({ type: 'assault', mapId });
      setMap(newMap);
    } else if (mapsPlayed.includes('map3') && matchStatus !== 'finished') {
      const mapId = getRandomInt(6);
      const newMap = await getMapById({ type: 'escort', mapId });
      setMap(newMap);
    } else {
      const mapId = getRandomInt(5);
      const newMap = await getMapById({ type: 'control', mapId });
      setMap(newMap);
      localStorage.setItem('mapsBlue', 0);
      localStorage.setItem('mapsRed', 0);
      setMapsBlue(localStorage.getItem('mapsBlue'));
      setMapsRed(localStorage.getItem('mapsRed'));
    }
  }, [mapsPlayed]);

  const match = useRouteMatch();

  function Maps() {
    if (mapsPlayed.includes('map1')) {
      return (
        <>
          <Result map="map1" />
          <Map
            map={map}
            mapsPlayed={mapsPlayed}
            mapValue="map2"
            setMapsPlayed={setMapsPlayed}
          />
        </>
      );
    }
    if (mapsPlayed.includes('map2') && matchStatus !== 'finished') {
      return (
        <>
          <Result map="map1" />
          <Result map="map2" />
          <Map
            map={map}
            mapsPlayed={mapsPlayed}
            mapValue="map3"
            setMapsPlayed={setMapsPlayed}
          />
        </>
      );
    }
    if (mapsPlayed.includes('map3') && matchStatus !== 'finished') {
      return (
        <>
          <Result map="map1" />
          <Result map="map2" />
          <Result map="map3" />
          <Map
            map={map}
            mapsPlayed={mapsPlayed}
            mapValue="map4"
            setMapsPlayed={setMapsPlayed}
          />
        </>
      );
    }
    if (matchStatus === 'finished') {
      return (
        <p>
          Match Winner is:
          {matchWinner}
        </p>
      );
    }
    return (
      <Map
        map={map}
        mapsPlayed={mapsPlayed}
        mapValue="map1"
        setMapsPlayed={setMapsPlayed}
      />
    );
  }

  return (
    <Container>
      <Table>
        <tr>
          <Td>Spielername:</Td>
          <Td>{name}</Td>
        </tr>
        <tr>
          <Td>Rolle:</Td>
          <Td>{role.title}</Td>
        </tr>
        <tr>
          <Td>Team:</Td>
          <Td>{team.team1}</Td>
        </tr>
      </Table>
      <Switch>
        <Route path={`${match.path}/:teamId`}>
          <Maps />
        </Route>
        <Route path={match.path}>
          <p>Wähle deinen Gegner:</p>
          {teams?.map((teamsItem) => (
            <Link to={`${match.url}/${teamsItem.id}`}>
              <TeamItem>{teamsItem.team1}</TeamItem>
            </Link>
          ))}
        </Route>
      </Switch>
    </Container>
  );
}
