import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTeams } from '../api/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  padding: 0;
`;

const Download = styled.a`
  border-radius: 20px;
  margin: 20px 0;
  padding: 1rem;
  background: black;
  color: orange;
  box-shadow: 0 10px 20px orange;
  text-decoration: none;
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

export default function Form() {
  const [teams, setTeams] = useState([]);
  useEffect(async () => {
    const newTeams = await getTeams();
    setTeams(newTeams);
  }, []);

  return (
    <>
      <h2>Anmeldung</h2>
      <Container>
        <h3>Wähle deine Region:</h3>
        {teams?.map((team) => (
          <Link key={team.id} to={`/${team.id}`}>
            <TeamItem>{team.regions}</TeamItem>
          </Link>
        ))}
        <Download href="https://www.mediafire.com/file/9z3gh03uyej2cfh/OW_Projekt_A.xlsx/file">
          Download Excel-Sheet
        </Download>
      </Container>
    </>
  );
}
