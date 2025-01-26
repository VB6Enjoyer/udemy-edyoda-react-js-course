let myArray = [NaN, 0, 15, false, -22, '', undefined, 47, null, 94];
let myFixedArray = [];

for (i in myArray) {
    value = myArray[i];

    if (value !== null && value !== undefined && value !== '' && value !== false && !Number.isNaN(value) && value !== 0) {
        console.log(myArray[i]);
        myFixedArray.push(myArray[i]);
    }
}

console.log(myFixedArray);