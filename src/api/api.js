export async function getTeams() {
  const response = await fetch('http://localhost:5000/teams');
  const teams = await response.json();
  return teams;
}

export async function getTeamById(id) {
  const response = await fetch(`http://localhost:5000/teams/${id}`);
  const team = await response.json();
  return team;
}

export async function getRoles() {
  const response = await fetch('http://localhost:5000/roles');
  const roles = await response.json();
  return roles;
}
