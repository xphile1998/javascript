// eightball.js

let userName = '';
userName = 'Eron';

if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log('Hello!');
}

let userQuestion = '';
userQuestion = 'Will I become a successful software engineer?';

if (userName) {
  console.log(`${userName}, your question was, "${userQuestion}"`);
} else {
  console.log(`Your question was, "${userQuestion}"`);
}

var randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'My sources say no';
    break;
  case 5:
    eightBall = 'Outlook not so good';
    break;
  case 6:
    eightBall = 'Signs point to yes';
    break;
  case 7:
    eightBall = 'Do not count on it';
    break;    
  default:
    console.log('There was a problem with the number. Run the program again.');
    break;
}

console.log(`The answer is "${eightBall}".`);
