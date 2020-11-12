export async function getTeams() {
  const response = await fetch('http://localhost:5050/teams');
  const teams = await response.json();
  return teams;
}

export async function getTeamById(id) {
  const response = await fetch(`http://localhost:5050/teams/${id}`);
  const team = await response.json();
  return team;
}

export async function getRoles() {
  const response = await fetch('http://localhost:5050/roles');
  const roles = await response.json();
  return roles;
}

export async function getRoleById(id) {
  const response = await fetch(`http://localhost:5050/roles/${id}`);
  const role = await response.json();
  return role;
}

export async function getMaps() {
  const response = await fetch('http://localhost:5050/maps');
  const maps = await response.json();
  return maps;
}

export async function getMapsByType(type) {
  const response = await fetch(`http://localhost:5050/maps?type=${type}`);
  const maps = await response.json();
  return maps;
}

export async function getMapById(id) {
  const response = await fetch(`http://localhost:5050/maps/${id}`);
  const map = await response.json();
  return map;
}

export function getMapScore(map) {
  const score = localStorage.getItem(map);
  return score;
}
