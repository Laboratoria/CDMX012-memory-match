import { pokemonCard } from './components/App.js';
document.getElementById('cards').appendChild(pokemonCard());

let pokeballs = document.getElementsByClassName('pokeball');
console.log(pokeballs);

Array.from(pokeballs).forEach(element=>{
  element.addEventListener("click", () => {
    console.log(element);
    element.style.visibility = "hidden";
  })
})