let i = 1;

while (i <= 15) {
    let string = i;

    if (i % 3 == 0) {
        string += " Fizz";
    } else if (i % 5 == 0) {
        string += " Buzz";
    }

    console.log(string);
    i++;
}