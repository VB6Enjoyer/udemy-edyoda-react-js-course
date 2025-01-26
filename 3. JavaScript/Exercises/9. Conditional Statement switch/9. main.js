// Q1
let month = "January";

switch (month) {
    case 'January':
        console.log(month + ' has 31 days.');
        break;
    case 'February':
        console.log(month + ' has 28 (or 29) days.');
        break;
    case 'March':
        console.log(month + ' has 31 days.');
        break;
    case 'April':
        console.log(month + ' has 30 days.');
        break;
    case 'May':
        console.log(month + ' has 31 days.');
        break;
    case 'June':
        console.log(month + ' has 30 days.');
        break;
    case 'July':
        console.log(month + ' has 31 days.');
        break;
    case 'August':
        console.log(month + ' has 31 days.');
        break;
    case 'September':
        console.log(month + ' has 30 days.');
        break;
    case 'October':
        console.log(month + ' has 31 days.');
        break;
    case 'November':
        console.log(month + ' has 30 days.');
        break;
    case 'December':
        console.log(month + ' has 31 days.');
        break;
    default:
        console.log('A year has 365 (or 366) days.');
        break;
}

// Q2
let letter = "a"

switch (letter) {
    case 'a' || 'e' || 'i' || 'o' || 'u':
        console.log(letter + ' is a vowel.');
        break;
    case 'b' || 'c' || 'd' || 'f' || 'g' || 'h' || 'j' || 'k' || 'l' || 'm' || 'n' || 'ñ' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z':
        console.log(letter + ' is a consonant.');
        break;
    default:
        console.log(letter + ' is whatever you want it to be.');
        break;
}

// Q3
let number = 28;

switch (number % 2) {
    case 0:
        console.log(number + ' is an even number.');
        break;
    case 1:
        console.log(number + ' is an odd number.');
        break;
    default:
        console.log(number + ' is not a number.');
        break;
}