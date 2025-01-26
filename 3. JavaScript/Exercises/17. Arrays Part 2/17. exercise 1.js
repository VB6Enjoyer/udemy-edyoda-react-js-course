let arr = [1, 'a', 2, 'b', 3, 'c', 6, 'd', 7, 'e', 8, 'f'];
let arr2 = [];

while (arr.length > 0) {
    arr2.push(arr.pop()); arr2.push(arr.pop());
}

console.log(arr2);