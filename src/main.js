import App from './components/App.js';
import webdev from './data/webdev/webdev.js';

const webdev1 = webdev.items;
const webdev2 = webdev.items;
let webdevRandom = webdev1.concat(webdev2);
webdevRandom = webdevRandom.sort(function(){return Math.random() - 0.5 });
console.log(webdevRandom);

document.getElementById('root').appendChild(App());
