/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// jsxDiv.js
import ReactDOM from 'react';

const jsxDiv = document.getElementById('jsxDiv');
const root = document.getElementById('root');
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez',
// };

// function formatName(user) {
//   const fullName = _.join([user.firstName, ' ', user.lastName]);
//   console.log(fullName);
//   return fullName;
// return user.firstName + ' ' + user.lastName;
// }

// const element1 = (
//   <h1>Hello, {formatName(user)}!</h1>
// );

// const fullName = 'Josh Perez';
// const element = (
//   <h1>
//     Hello, {fullName}
//   </h1>
// );

// jsxDiv.innerHTML = '';
// jsxDiv.appendChild(element);

function formatName(user) {
  const fullName = _.join([user.firstName, ' ', user.lastName]);
  return fullName;
  // return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root'),
);
