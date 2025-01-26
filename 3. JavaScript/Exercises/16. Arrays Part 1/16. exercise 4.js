let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

for (i in arr1) {
    if (arr2.indexOf(arr1[i]) != -1) {
        console.log(true);
        break;
    } else if (i == arr1.length - 1) {
        console.log(false);
    }
}

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

for (i in arr1) {
    if (arr2.indexOf(arr1[i]) != -1) {
        console.log(true);
        break;
    } else if (i == arr1.length - 1) {
        console.log(false);
    }
}