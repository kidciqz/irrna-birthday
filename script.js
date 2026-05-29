
const correctPassword = "300597";

function checkPassword(){
    const input = document.getElementById("password").value;

    if(input === correctPassword){
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");

        const music = document.getElementById("bgMusic");
        music.play();

        startTyping();
        startHearts();
    } else {
        document.getElementById("error").innerText = "Wrong password ❤️";
    }
}

const text = "To the most beautiful girl in my life ✨";
let index = 0;

function startTyping(){
    const typing = document.getElementById("typing");

    const interval = setInterval(()=>{
        typing.innerHTML += text[index];
        index++;

        if(index >= text.length){
            clearInterval(interval);
        }
    },60);
}

function startHearts(){
    setInterval(()=>{
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);

    },500);
}

const meetDate = new Date("2023-01-01");

function updateCountdown(){
    const now = new Date();
    const diff = now - meetDate;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);

    document.getElementById("countdown").innerHTML =
    `${days} Days ${hours} Hours`;
}

setInterval(updateCountdown,1000);

let score = 0;

function spawnHeart(){
    score++;
    document.getElementById("score").innerText = "Score: " + score;
}
