const correctPassword = "300597";

function checkPassword() {
    const input = document.getElementById("password").value;

    if(input === correctPassword) {
        // Hide lock screen and show main content
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");

        // Play the music
        const music = document.getElementById("bgMusic");
        music.play().catch(error => console.log("Audio play failed:", error));

        // Start animations
        startTyping();
        startHearts();
    } else {
        document.getElementById("error").innerText = "Wrong password ❤️";
    }
}

// --- Typing Effect ---
const text = "To the most beautiful girl in my life ✨";
let index = 0;

function startTyping() {
    const typing = document.getElementById("typing");

    const interval = setInterval(() => {
        typing.innerHTML += text[index];
        index++;

        if(index >= text.length) {
            clearInterval(interval);
        }
    }, 60);
}

// --- Floating Hearts ---
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500); 
}

// --- Countdown ---
const meetDate = new Date("2023-03-04");

function updateCountdown() {
    const now = new Date();
    const diff = now - meetDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hours`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// --- Mini Game ---
let score = 0;

function spawnHeart() {
    score++;
    document.getElementById("score").innerText = "Score: " + score;
    
    // Create a little celebration heart where they click
    const miniHeart = document.createElement("div");
    miniHeart.innerText = "💖";
    miniHeart.style.position = "absolute";
    miniHeart.style.animation = "floatUp 1s linear forwards";
    document.querySelector('.game').appendChild(miniHeart);
    
    setTimeout(() => miniHeart.remove(), 1000);
}

// --- ZUS Coupon Logic ---
function showCoupon() {
    document.getElementById("couponModal").classList.remove("hidden-modal");
}

function closeCoupon() {
    document.getElementById("couponModal").classList.add("hidden-modal");
}
