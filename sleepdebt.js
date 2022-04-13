// sleepdebt.js - Sleep Debt Calculator

const getSleepHours = day => {
    switch (day) {
        case 'monday': 
            return 8;
        case 'tuesday':
            return 8;
        case 'wednesday':
            return 8;
        case 'thursday':
            return 8;
        case 'friday':
            return 8;
        case 'saturday':
            return 8;
        case 'sunday':
            return 4;
        default:
            return 'Is that a day of the week?';
    }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
    idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep than the ideal amount.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep thatn the ideal amount.')
    }
};

calculateSleepDebt();
