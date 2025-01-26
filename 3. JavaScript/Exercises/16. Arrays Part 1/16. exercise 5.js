let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let arr3 = [];

for (i in arr1) {
    if (arr2.indexOf(arr1[i]) == -1) {
        arr3.push(arr1[i]);
    }
};


for (i in arr2) {
    if (arr1.indexOf(arr2[i]) == -1) {
        arr3.push(arr2[i]);
    }
};

console.log(arr3);