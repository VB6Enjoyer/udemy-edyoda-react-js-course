const customers_data = {
    'Ben10': [22, 30, 11, 17, 15, 52, 27, 12],
    'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
    'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57]
};
let counter = 0;

for (i in customers_data.Ben10) {
    if (customers_data.Ben10[i] >= 20) {
        counter++;
    }

    if (counter >= 5) {
        console.log("Ben 10 has a premium membership.");
        break;
    }
}

counter = 0;

for (i in customers_data.Sameer) {
    if (customers_data.Sameer[i] >= 20) {
        counter++;
    }

    if (counter >= 5) {
        console.log("Sameer has a premium membership.");
        break;
    }
}

counter = 0;

for (i in customers_data.Zeeshan) {
    if (customers_data.Zeeshan[i] >= 20) {
        counter++;
    }

    if (counter >= 5) {
        console.log("Zeeshan has a premium membership.");
        break;
    }
}

counter = 0;