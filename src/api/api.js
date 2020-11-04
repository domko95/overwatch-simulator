export async function getTeams() {
  const response = await fetch('http://localhost:5000/teams');
  const teams = await response.json();
  return teams;
}

export async function getTeamsById(id) {
  const response = await fetch(`http://localhost:5000/teams/${id}`);
  const team = await response.json();
  return team;
}
