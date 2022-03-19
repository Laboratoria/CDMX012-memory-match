// import webdevCard from './components/App.js';
import webdev from './data/webdev/webdev.js';

const webdev1 = webdev.items;
const webdev2 = webdev.items;
let webdevJoin= webdev1.concat(webdev2);
let images = []
webdevJoin.forEach(element => images.push(element.image));
images.sort(function(){return Math.random() - 0.5 });

const webdevCard = () => {
  const image = document.createElement('div');
  image.className = 'cards-conteiner';
  for(let i=0; i <images.length; i++){
    image.innerHTML += `<img src="${images[i]}" class="image">`;
  }
  console.log(image);
  return image;
};

document.getElementById('root').appendChild(webdevCard());

// document.getElementById('root').appendChild(App());

