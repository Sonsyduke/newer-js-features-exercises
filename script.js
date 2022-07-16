// DEFAULT PARAMS
// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(mgs = "Hey There", person) {
//   console.log(`${mgs}, ${person}`);
// }

// SPREAD
const nums = [12, 23, 45, 222, 664, 234, 1092, 3482, 453, 212];

const highestNum = Math.max(...nums);
const lowestNum = Math.min(...nums);

// COMBINING TWO ARRAYS
const dogs = ["Rocky", "Rolly", "Bruno"];
const cats = ["Matt", "Ginger"];

const allPets = [...dogs, ...cats];
