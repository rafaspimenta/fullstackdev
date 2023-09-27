const randomTeams = ['atletico', 'cruzeiro', 'sao paulo', 'flalixo', 'fluminense'];

const randomIdx = Math.floor(Math.random() * randomTeams.length);

const randomTeam = () => randomTeams[randomIdx];

console.log(`The soccer team that will win the brazilian championship at 2023 will be: ${randomTeam()}`)