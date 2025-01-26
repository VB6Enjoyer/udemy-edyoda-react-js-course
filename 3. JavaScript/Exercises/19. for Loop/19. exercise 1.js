let string = "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.";
let leetifiedString = "";

for (let i = 0; i < string.length; i++) {
    switch (string.charAt(i)) {
        case "a" || "A":
            leetifiedString += "4";
            break;
        case "e" || "E":
            leetifiedString += "3";
            break;
        case "i" || "I":
            leetifiedString += "1";
            break;
        case "o" || "O":
            leetifiedString += "0";
            break;
        case "s" || "S":
            leetifiedString += "5";
            break;
        case "t" || "T":
            leetifiedString += "7";
            break;
        default:
            leetifiedString += string.charAt(i);
            break;
    }
}

console.log(leetifiedString);