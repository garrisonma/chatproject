// Pineapple Parade
function startPineappleParade() {
    const pineappleContainer = document.getElementById("pineapple-container");
    pineappleContainer.innerHTML = ""; // Clear previous pineapples (if any)

    for (let i = 0; i < 10; i++) {
        const pineapple = document.createElement("img");
        pineapple.src = "pineapple.gif";
        pineapple.alt = "Pineapple";
        pineapple.style.position = "absolute";
        pineapple.style.left = `${Math.random() * 90}%`;
        pineapple.style.top = `${Math.random() * 90}%`;
        pineappleContainer.appendChild(pineapple);
    }
}

// Silly Soundboard
function playSound() {
    const audio = document.getElementById("sound");
    audio.play();
}

// Zap-o-Matic
function activateZap() {
    const body = document.querySelector("body");
    const zapInterval = setInterval(function() {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        const zapImage = document.createElement("img");
        zapImage.src = "zap.png";
        zapImage.style.position = "absolute";
        zapImage.style.left = `${randomX}px`;
        zapImage.style.top = `${randomY}px`;
        body.appendChild(zapImage);

        setTimeout(function() {
            body.removeChild(zapImage);
        }, 1000);
    }, 200);
    
    setTimeout(function() {
        clearInterval(zapInterval);
    }, 3000);
}
