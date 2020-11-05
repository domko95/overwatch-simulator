import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getRoleById, getTeamById } from '../api/api';

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

export default function Player() {
  const { name } = useParams();
  localStorage.setItem('name', name);
  const teamId = localStorage.getItem('region');
  const [team, setTeam] = useState([]);
  useEffect(async () => {
    const newTeam = await getTeamById(teamId);
    setTeam(newTeam);
  }, []);
  const roleId = localStorage.getItem('role');
  const [role, setRole] = useState([]);
  useEffect(async () => {
    const newRole = await getRoleById(roleId);
    setRole(newRole);
  }, []);
  return (
    <Container>
      Herzlichen Glückwunsch zur Anmeldung.
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
    </Container>
  );
}
