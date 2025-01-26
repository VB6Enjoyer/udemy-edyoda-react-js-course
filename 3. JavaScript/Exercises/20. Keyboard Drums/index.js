const body = document.body;

document.addEventListener("keydown", function (e) {
    if (e.key == "a") {
        let clap = document.getElementById("clap").cloneNode(true);
        clap.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }

    if (e.key == "s") {
        let closedHiHat = document.getElementById("hihat").cloneNode(true);
        closedHiHat.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }

    if (e.key == "d") {
        let kick = document.getElementById("kick").cloneNode(true);
        kick.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }

    if (e.key == "f") {
        let openHiHat = document.getElementById("openhat").cloneNode(true);
        openHiHat.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }

    if (e.key == "g") {
        let boom = document.getElementById("boom").cloneNode(true);
        boom.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }

    if (e.key == "h") {
        let ride = document.getElementById("ride").cloneNode(true);
        ride.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }

    if (e.key == "j") {
        let snare = document.getElementById("snare").cloneNode(true);
        snare.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }

    if (e.key == "k") {
        let tom = document.getElementById("tom").cloneNode(true);
        tom.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }

    if (e.key == "l") {
        let tink = document.getElementById("tink").cloneNode(true);
        tink.play();

        body.style.background = getRandomGradient();

        const key = event.key.toUpperCase();
        const button = document.querySelector(`.drum-button[data-key="${key}"]`);
        if (button) {
            button.classList.add("beat");

            button.addEventListener("animationend", function () {
                button.classList.remove("beat");
            }, { once: true });
        }

        setTimeout(() => {
            body.style.background = "black";
        }, 250);
    }
});

// AI-Generated
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}