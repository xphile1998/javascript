// secretMessage.js - Secret Message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
console.log(secretMessage.length);

let tempIndex = secretMessage.indexOf('easily');
secretMessage[tempIndex] = 'right';

console.log(secretMessage[tempIndex]);

console.log(secretMessage);

secretMessage.shift();

console.log(secretMessage);

secretMessage.unshift('Programming');

console.log(secretMessage);

tempIndex = secretMessage.indexOf('get');
secretMessage.splice(tempIndex, 5, 'know');
console.log(secretMessage);

console.log(secretMessage.join(' '));
