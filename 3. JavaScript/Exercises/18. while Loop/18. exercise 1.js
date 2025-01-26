let num1 = 15;
let num2 = 25;
let i = num1;
let gcd = 0;

while (gcd == 0) {
    if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
    }

    i--;
}

console.log("The GCD of", num1, "&", num2, "is", gcd);