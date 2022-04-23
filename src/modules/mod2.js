import _ from 'lodash';

console.log(_.join(['mod2.js', 'loaded!'], ' '));

export default function printMe2() {
  console.log('I get called from mod2.js!');
}
