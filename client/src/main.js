const getSomePlayersFromDatabase = async () => {
  const response = await fetch('http://localhost:8080/players');
  const data = await response.json();
  console.log(data);
};

getSomePlayersFromDatabase();
