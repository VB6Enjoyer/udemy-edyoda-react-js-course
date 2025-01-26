let myArray = ['asdf', 'sd', 'something', 'right', 'position'];
let aux = myArray[0];

myArray.forEach(string => {
    if (string > aux) {
        aux = string;
    }
});

console.log("The longest string in the array is", aux);