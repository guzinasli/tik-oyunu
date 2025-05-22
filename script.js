let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let timeLeft = 30;
let timer;
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highScore");
const timeDisplay = document.getElementById("time");
const clickButton = document.getElementById("clickBtn");
const message = document.getElementById("message");
const clickSound = document.getElementById("clickSound");

highScoreDisplay.textContent = highScore;

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
    clickSound.play();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            clickButton.disabled = true;
            message.textContent = "Süre doldu! Skorun: " + score;

            if (score > highScore) {
                highScore = score;
                localStorage.setItem("highScore", highScore);
                highScoreDisplay.textContent = highScore;
                message.textContent += " 🔥 Yeni rekor!";
            }
        }
    }, 1000);
}

clickButton.addEventListener("click", () => {
    if (timeLeft === 30 && score === 0) {
        startTimer();
    }
    updateScore();
});
