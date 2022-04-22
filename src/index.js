// index.js
import './index.scss';
import _ from 'lodash';
import printMe from './modules/print.js';

function component() {
  const element = document.createElement('h1');
  element.classList.add('hello');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
