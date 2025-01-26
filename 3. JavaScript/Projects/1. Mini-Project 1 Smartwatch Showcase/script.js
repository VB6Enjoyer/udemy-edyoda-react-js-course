const timeText = document.getElementById("time");
timeText.innerHTML = getCurrentTime();

//blackBtn.onmousedown(changeColor(blackBtn.id));
//blueBtn.onclick(changeColor(blueBtn.id));
//orangeBtn.onclick(changeColor(orangeBtn.id));
//pinkBtn.onclick(changeColor(pinkBtn.id));
//purpleBtn.onclick(changeColor(purpleBtn.id));

function getCurrentTime() { // AI-Generated
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
    setInterval(() => {
        timeText.innerHTML = getCurrentTime();
    }, 1000);

}

function changeColor(id) {
    const smartwatch = document.getElementById("smartwatch-image")

    switch (id) {
        case "black-btn":
            smartwatch.src = "./images/black.png";
            break;
        case "blue-btn":
            smartwatch.src = "./images/blue.png";
            break;
        case "orange-btn":
            smartwatch.src = "./images/orange.png";
            break;
        case "pink-btn":
            smartwatch.src = "./images/pink.png";
            break;
        case "purple-btn":
            smartwatch.src = "./images/purple.png";
            break;
    }
}

function showTime() {
    const heartRate = document.getElementById("heart-rate-container");
    const time = document.getElementById("time");

    if (time.classList.contains("hidden")) {
        heartRate.classList.add("hidden");
        time.classList.remove("hidden");
    }
}

function showHeartRate() {
    const heartRate = document.getElementById("heart-rate-container");
    const time = document.getElementById("time");

    if (heartRate.classList.contains("hidden")) {
        heartRate.classList.remove("hidden");
        time.classList.add("hidden");
    }
}