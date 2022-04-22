// index.js
import './index.scss';
import _ from 'lodash';

// const dyn = document.getElementById('dyn');

function component() {
  const element = document.createElement('h1');

  // // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
// dyn.appendChild(component());