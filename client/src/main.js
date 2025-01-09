const playersContainer = document.querySelector('.players-container');

const getSomePlayersFromDatabase = async () => {
  const response = await fetch('http://localhost:8080/players');
  const data = await response.json();
  console.log(data);
  data.forEach((player) => {
    const p = document.createElement('p');
    p.textContent = player.name;
    playersContainer.appendChild(p);
  });
};

getSomePlayersFromDatabase();
