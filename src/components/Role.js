import React, { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  useRouteMatch,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { getRoles, getTeamById } from '../api/api';
import Input from './Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  padding: 0;
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

export default function Role() {
  const match = useRouteMatch();
  const { teamId } = useParams();
  localStorage.setItem('region', teamId);
  const [team, setTeam] = useState([]);
  useEffect(async () => {
    const newTeam = await getTeamById(teamId);
    setTeam(newTeam);
  }, []);
  const [roles, setRoles] = useState([]);
  useEffect(async () => {
    const newRoles = await getRoles();
    setRoles(newRoles);
  }, []);
  return (
    <Container>
      <Switch>
        <Route path={`${match.path}/:roleId`}>
          <Input />
        </Route>
        <Route path={match.path}>
          <table>
            <tr>
              <td>Deine Region:</td>
              <td>{team.regions}</td>
            </tr>
            <tr>
              <td>Das Team deiner Region:</td>
              <td>{team.team1}</td>
            </tr>
          </table>
          <h3>Wähle deine Rolle:</h3>
          {roles?.map((role) => (
            <Link to={`${match.url}/${role.id}`}>
              <TeamItem>{role.title}</TeamItem>
            </Link>
          ))}
        </Route>
      </Switch>
    </Container>
  );
}
