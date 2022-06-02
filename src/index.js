// index.js
import './index.scss';
import _ from 'lodash';
import printMe1 from './modules/print.js';
import printMe2 from './modules/mod2.js';

function component() {
  const dyn1 = document.createElement('div');
  dyn1.className = 'dyn1';
  const h1 = document.createElement('h1');
  h1.classList.add('hello');
  h1.innerHTML = _.join(['React', 'Sandbox v1.1'], ' ');

  const btn1 = document.createElement('button');
  btn1.innerHTML = 'Call print.js';
  btn1.onclick = printMe1;

  const btn2 = document.createElement('button');
  btn2.innerHTML = 'Call mod2.js';
  btn2.onclick = printMe2;

  dyn1.appendChild(h1);
  dyn1.appendChild(btn1);
  dyn1.appendChild(btn2);

  return dyn1;
}

document.body.appendChild(component());
