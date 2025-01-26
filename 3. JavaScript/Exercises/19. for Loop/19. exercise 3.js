let string = "The Quick Brown Fox";
let newString = "";

for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== string.charAt(i).toLowerCase()) {
        newString += string.charAt(i).toLowerCase();
    } else {
        newString += string.charAt(i).toUpperCase();
    }
}

console.log(newString);