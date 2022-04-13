// raceday.js
let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const runnerAge = 18;

if (registeredEarly === true && runnerAge >= 18) {
    raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly === true) {
    console.log(`Your race number is ${raceNumber}. You will be racing at 9:30 AM.`);
} else if (runnerAge >= 18 && registeredEarly === false) {
    console.log(`Your race number is ${raceNumber}. You will be racing at 11:00 AM.`);
} else {
    console.log(`Your race number is ${raceNumber}. Youth registrants will be racing at 12:30 PM.`);
}
