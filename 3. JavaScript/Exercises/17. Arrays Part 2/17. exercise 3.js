let arr1 = [4, 5, 6, 7, 8];
let arr2 = [3, 4, 6, 6, 7, 8, 9];
let arr3 = [34, 23, 45, 55, 67, 77];

for (let i = 0; i < arr1.length; i++) {
    if (i < arr1.length && arr1[i + 1] <= arr1[i]) {
        console.log(arr1, "is NOT a strictly increasing sequence.");
        break;
    }

    if (i + 1 >= arr1.length) {
        console.log(arr1, "is a strictly increasing sequence.");
    }
}

for (let i = 0; i < arr2.length; i++) {
    if (i < arr2.length && arr2[i + 1] <= arr2[i]) {
        console.log(arr2, "is NOT a strictly increasing sequence.");
        break;
    }

    if (i + 1 >= arr2.length) {
        console.log(arr2, "is a strictly increasing sequence.");
    }
}

for (let i = 0; i < arr3.length; i++) {
    if (i < arr3.length && arr3[i + 1] <= arr3[i]) {
        console.log(arr3, "is NOT a strictly increasing sequence.");
        break;
    }

    if (i + 1 >= arr3.length) {
        console.log(arr3, "is a strictly increasing sequence.");
    }
}