let arr = [22, 8, 301, 404, 35, 99];
let stringArr = [];

for (let i = 0; i < arr.length; i++) {
    let stringNum = String(arr[i]);

    if (stringNum.charAt(stringNum.length - 1) == '1') {
        stringArr.push(stringNum + "st");
    } else if (stringNum.charAt(stringNum.length - 1) == '2') {
        stringArr.push(stringNum + "nd");
    } else if (stringNum.charAt(stringNum.length - 1) == '3') {
        stringArr.push(stringNum + "rd");
    } else {
        stringArr.push(stringNum + "th");
    }
}

console.log(stringArr);