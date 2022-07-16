// DEFAULT PARAMS
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(mgs = "Hey There", person) {
  console.log(`${mgs}, ${person}`);
}
