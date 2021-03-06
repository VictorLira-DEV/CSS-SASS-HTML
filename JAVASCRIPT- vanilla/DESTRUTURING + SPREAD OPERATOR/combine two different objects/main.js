//everything in personTwo two will overwrite what is in person personOne

const personOne = {
    name : 'Kyle',
    age : 24,
    bestMusic: 'love the way you lie',
    address: {
        city: 'somewhere else',
        state: 'another  one of them'
    }
}

const personTwo = {
    age : 23,
    favoriteFood: 'Pizza',
    bestMusic: 'lose yourself'
}

const personThree = {...personOne, ...personTwo}

console.log(personThree)


