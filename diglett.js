document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".b-square");
    const scoreDisplay = document.getElementById("score");
    const timeLeftDisplay = document.getElementById("timeLeft");
    let score = 0;
    let timeLeft = 30;
    let diglettPosition;
    let timerId;
    
    function moveDiglett() {
        squares.forEach(square => square.classList.remove("b-mole"));
        
        let randomSquare = squares[Math.floor(Math.random() * squares.length)];
        randomSquare.classList.add("b-mole");
        diglettPosition = randomSquare;
    }
    
    function startGame() {
        timerId = setInterval(moveDiglett, 500);
        
        let countdown = setInterval(() => {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
            
            if (timeLeft === 0) {
                clearInterval(countdown);
                clearInterval(timerId);
                alert(`Game Over! Your final score is: ${score}`);
            }
        }, 1000);
    }
    
    squares.forEach(square => {
        square.addEventListener("click", () => {
            if (square === diglettPosition) {
                score++;
                scoreDisplay.textContent = score;
                diglettPosition = null;
            }
        });
    });
    
    startGame();
});