'use strict'

document.querySelector('#button').addEventListener('click', setRandomSong);
let random = document.querySelector('.random');

let song = document.createElement('audio')
song.controls = 'controls'

function setRandomSong() {
    let randomNumber = Math.floor(Math.random() * 7 + 1 - .5)
    song.src = `./audio/${randomNumber}.mp3`

    random.appendChild(song)
    console.log(randomNumber)
}

