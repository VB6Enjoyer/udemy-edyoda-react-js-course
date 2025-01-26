let n1 = 15;
let n2 = 20;
let lcm = 0;
let i = 1;

while (lcm == 0) {
    let n3 = 15 * i;
    let j = 1;

    while (n2 * j < n3) {
        j++;
    }

    if (n2 * j == n3) {
        lcm = n3;
    }

    i++;
}

console.log("The LCM of", n1, "&", n2, "is", lcm + ".");