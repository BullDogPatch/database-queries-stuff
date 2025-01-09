const playersContainer = document.querySelector('.players-container');

const getSomePlayersFromDatabase = async () => {
  const response = await fetch('http://localhost:8080/players');
  const data = await response.json();
  console.log(data);
  data.forEach((player) => {
    const div = document.createElement('div');
    div.className = 'player';
    div.style.border = '1px solid darkgrey';
    const h3 = document.createElement('h3');
    const shirtNum = document.createElement('p');
    const playerPos = document.createElement('p');
    const nationality = document.createElement('p');
    h3.textContent = `${player.name} ${player.is_captain ? '(C)' : ''}`;
    shirtNum.textContent = `# ${player.shirt_number}`;
    playerPos.textContent = `Position: ${player.position}`;
    nationality.textContent = `Nationality: ${player.nationality}`;
    div.appendChild(h3);
    div.appendChild(shirtNum);
    div.appendChild(playerPos);
    div.appendChild(nationality);
    playersContainer.appendChild(div);
  });
};

getSomePlayersFromDatabase();

const getCaptain = async () => {
  const response = await fetch('http://localhost:8080/captain');
  const data = await response.json();
  console.log(data);
};

getCaptain();

const addPlayerForm = document.querySelector('#add-player-form');

const addPlayer = (e) => {
  e.preventDefault();

  const formData = new FormData(addPlayerForm);
  const playerName = formData.get('add-player');

  fetch('http://localhost:8080/players', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: playerName }),
  });
};

addPlayerForm.addEventListener('submit', addPlayer);
