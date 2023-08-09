let joke = document.querySelector('#joke');
let button = document.querySelector('#btn');
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke(){
    joke.classList.remove('fade');
    let jokeContainer = await fetch(url);
    let jokedata = await jokeContainer.json();
    joke.classList.add('fade');
    joke.textContent = jokedata.joke;
    console.log(jokedata.joke);
}

button.addEventListener('click',getJoke);