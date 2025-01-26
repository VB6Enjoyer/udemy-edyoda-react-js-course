let string = "There is exactly one space between each word and no punctuation is used."
let newString = "";
let words = string.split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 != 0 && words[i].charAt(words[i].length - 1) != ".") {
        for (let j = words[i].length - 1; j >= 0; j--) {
            newString += words[i].charAt(j);
        }
    } else {
        newString += words[i];
    }

    if (i != words.length) {
        newString += " ";
    }
}

console.log(newString);