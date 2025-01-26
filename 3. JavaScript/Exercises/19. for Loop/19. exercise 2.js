let string = "Good, better, best. Never let it rest. 'Til your good is better and your better is best.";
let counter = 0;

for (let i = 0; i < string.length; i++) {
    if ("aeiou".includes(string.charAt(i).toLowerCase())) {
        counter++;
    }
}

console.log(counter);
console.log("The sentence has", counter, "vowels.");