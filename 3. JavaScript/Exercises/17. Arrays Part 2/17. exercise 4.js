let amount = 46;
let coins = [25, 10, 5, 2, 1];
let usedCoins = [];

while (amount > 0) {
    if (amount >= coins[0]) { // 25
        usedCoins.push(coins[0]);
        amount -= coins[0];
    } else if (amount >= coins[1]) { // 10
        usedCoins.push(coins[1]);
        amount -= coins[1];
    } else if (amount >= coins[2]) { // 5
        usedCoins.push(coins[2]);
        amount -= coins[2];
    } else if (amount >= coins[3]) { // 2
        usedCoins.push(coins[3]);
        amount -= coins[3];
    } else if (amount >= coins[4]) { // 1
        usedCoins.push(coins[4]);
        amount -= coins[4];
    }
}

console.log("Coins used:", usedCoins);