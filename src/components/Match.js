import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import styled from 'styled-components';
import { getMapById, getRoleById, getTeamById, getTeams } from '../api/api';
import getRandomInt from '../utils/random';
import Mapresult from './Mapresult';

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
    const mapId = getRandomInt(3);
    const newMap = await getMapById(mapId);
    setMap(newMap);
  }, []);

  const match = useRouteMatch();

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
          <div>Hier kommt Map 1</div>
          <h3>{map.title}</h3>
          <Mapresult map="map1" />
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
