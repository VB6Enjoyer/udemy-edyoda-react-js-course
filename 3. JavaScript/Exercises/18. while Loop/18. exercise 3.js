let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let num = 8;
let i = 0;
let currentVal = arr[0];
let evenCount = 0;

while (currentVal != num) {
    if (currentVal % 2 == 0) {
        evenCount++;
    }

    i++;
    currentVal = arr[i];
}

console.log("Amount of even numbers in the sequence:", evenCount);