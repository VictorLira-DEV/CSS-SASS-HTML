// use '{}' to destruct objects
// use '[]' to destruct array

const personOne = {
  name: "Kyle",
  age: 24,
  address: {
    city: "somewhere else",
    state: "another  one of them",
  },
};

const personTwo = {
  name: "Victor",
  age: 23,
  favoriteFood: "Pizza",
  bestMusic: "lose yourself",
  address: {
    city: "Cariacica",
    state: "Espirito Santo",
    street: "estrada Caçaroca",
  },
};

const {
  name: userName,
  age: userAge,
  address: { street, city },
} = personTwo;

console.log(userAge, userName)