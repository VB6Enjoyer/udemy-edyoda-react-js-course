let arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
let arr2 = [7, 13, 25, 46, 58, 70, 84];

for (i in arr1) {
    if (arr2.indexOf(arr1[i]) != -1) {
        console.log("One element is in both arrays.");
        break;
    }
}