import React from 'react';
import { useParams } from 'react-router-dom';

export default function Player() {
  const { name } = useParams();
  localStorage.setItem('name', name);
  return <div>Herzlichen Glückwunsch zur Anmeldung.</div>;
}
