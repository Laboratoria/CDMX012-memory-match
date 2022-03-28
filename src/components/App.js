import pokemon from '../data/pokemon/pokemon.js';

const pokemon1 = pokemon.items;
const pokemon2 = pokemon.items;
let pokemonJoin= pokemon1.concat(pokemon2);
let images = []
pokemonJoin.forEach(element => images.push(element.image));
images.sort(function(){return Math.random() - 0.5 });

export const pokemonCard = () => {
  const cardsConteiner = document.createElement('div');
  cardsConteiner.className = 'cards-conteiner';
  // for(let i=0; i <images.length; i++){
  //   cardsConteiner.innerHTML += `<img src="${images[i]}" class="image">`;
  // }
  images.forEach(image => {
    cardsConteiner.innerHTML += `<img src="${image}" class="image">`;
  })
  return cardsConteiner;
};