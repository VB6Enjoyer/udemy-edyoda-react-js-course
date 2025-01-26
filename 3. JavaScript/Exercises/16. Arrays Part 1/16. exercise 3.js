let myArray = [1, 3, 6, 2, 5, 10];
let mySecondArray = [];
let myThirdArray = [];
let flag = true;

myArray.forEach(number => {
    if (flag) {
        mySecondArray.push(number);
        flag = false;
    } else {
        myThirdArray.push(number);
        flag = true;
    }
});

console.log(mySecondArray, myThirdArray);