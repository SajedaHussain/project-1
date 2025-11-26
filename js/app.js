/*-------------------------------- Constants --------------------------------*/
// Game Data
const game = {
    levels: [
        {
            level: 1,
            question: " WATER",
            options: ["H", "O", "C", "N", "Ar"],
            correctAnswer: ["H", "O"],
            time: 10 //seconds
        },
        {
            level: 2,
            question: " CARBON DIOXIDE",
            options: ["C", "O", "H", "F"],
            correctAnswer: ["C", "O"],
            time: 10
        },
        {
            level: 3,
            question: " AMMONIA",
            options: ["N", "H", "O", "Ar"],
            correctAnswer: ["N", "H"],
            time: 10
        },
        {
            level: 4,
            question: " METHANE",
            options: ["C", "H", "O", "N"],
            correctAnswer: ["C", "H"],
            time: 10
        },
        {
            level: 5,
            question: " SODIUM CHLORIDE",
            options: ["Na", "Cl", "O", "H"],
            correctAnswer: ["Na", "Cl"],
            time: 9
        },
        {
            level: 6,
            question: " ZINC CHLORIDE",
            options: ["Zn", "Cl", "O", "H", "C"],
            correctAnswer: ["Zn", "Cl"],
            time: 9
        },
        {
            level: 7,
            question: " GLUCOSE",
            options: ["C", "H", "O", "N", "Na"],
            correctAnswer: ["C", "H", "O"],
            time: 9
        },
        {
            level: 8,
            question: " TABLE SALT",
            options: ["Na", "Cl", "K", "Ca"],
            correctAnswer: ["Na", "Cl"],
            time: 9
        },
        {
            level: 9,
            question: " NITRIC ACID",
            options: ["H", "N", "O", "Cl", "C"],
            correctAnswer: ["H", "N", "O"],
            time: 8
        },
        {
            level: 10,
            question: "SULFURIC ACID",
            options: ["H", "S", "O", "N", "F"],
            correctAnswer: ["H", "S", "O"],
            time: 8
        },
        {
            level: 11,
            question: "AMMONIUM CHLORIDE",
            options: ["N", "H", "Cl", "O", "S"],
            correctAnswer: ["N", "H", "Cl"],
            time: 8
        },
        {
            level: 12,
            question: "ETHANOL",
            options: ["C", "H", "O", "N", "S"],
            correctAnswer: ["C", "H", "O"],
            time: 8
        },
        {
            level: 13,
            question: " ACETIC ACID",
            options: ["C", "H", "O", "N", "Cl"],
            correctAnswer: ["C", "H", "O"],
            time: 8
        },
        {
            level: 14,
            question: " CALCIUM CARBONATE",
            options: ["Ca", "C", "O", "H", "N"],
            correctAnswer: ["Ca", "C", "O"],
            time: 8
        },
        {
            level: 15,
            question: " MAGNESIUM OXIDE",
            options: ["Mg", "O", "H", "C", "N"],
            correctAnswer: ["Mg", "O"],
            time: 8
        },
        {
            level: 16,
            question: " POTASSIUM IODIDE",
            options: ["K", "I", "Cl", "Na", "O"],
            correctAnswer: ["K", "I"],
            time: 8
        },
        {
            level: 17,
            question: " HYDROGEN PEROXIDE",
            options: ["H", "O", "N", "S", "Cl"],
            correctAnswer: ["H", "O"],
            time: 8
        },
        {
            level: 18,
            question: " CARBON MONOXIDE",
            options: ["C", "O", "H", "N", "S"],
            correctAnswer: ["C", "O"],
            time: 8
        },
        {
            level: 19,
            question: " CALCIUM CHLORIDE",
            options: ["Ca", "Cl", "O", "H", "C"],
            correctAnswer: ["Ca", "Cl"],
            time: 8
        },
        {
            level: 20,
            question: " SODIUM BICARBONATE",
            options: ["Na", "H", "C", "O", "N"],
            correctAnswer: ["Na", "H", "C", "O"],
            time: 7
        },
        {
            level: 21,
            question: " AMMONIUM SULFATE",
            options: ["N", "H", "S", "O", "Cl"],
            correctAnswer: ["N", "H", "S", "O"],
            time: 7
        },
        {
            level: 22,
            question: " PHOSPHORIC ACID",
            options: ["H", "P", "O", "N", "C"],
            correctAnswer: ["H", "P", "O"],
            time: 7
        },
        {
            level: 23,
            question: " CALCIUM SULFATE",
            options: ["Ca", "S", "O", "H", "C"],
            correctAnswer: ["Ca", "S", "O"],
            time: 7
        },
        {
            level: 24,
            question: " SODIUM HYDROXIDE",
            options: ["Na", "H", "O", "Cl", "S"],
            correctAnswer: ["Na", "H", "O"],
            time: 7
        },
        {
            level: 25,
            question: " POTASSIUM NITRATE",
            options: ["K", "N", "O", "H", "C"],
            correctAnswer: ["K", "N", "O"],
            time: 7
        },
        {
            level: 26,
            question: " MAGNESIUM SULFATE",
            options: ["Mg", "S", "O", "H", "N"],
            correctAnswer: ["Mg", "S", "O"],
            time: 7
        },
        {
            level: 27,
            question: " HYDROCHLORIC ACID",
            options: ["H", "Cl", "O", "N", "C"],
            correctAnswer: ["H", "Cl"],
            time: 7
        },
        {
            level: 28,
            question: " POTASSIUM CHLORIDE",
            options: ["K", "Cl", "Na", "H", "O"],
            correctAnswer: ["K", "Cl"],
            time: 7
        },
        {
            level: 29,
            question: " CALCIUM HYDROXIDE",
            options: ["Ca", "H", "O", "C", "N"],
            correctAnswer: ["Ca", "H", "O"],
            time: 7
        },
        {
            level: 30,
            question: " ALUMINUM OXIDE",
            options: ["Al", "O", "H", "C", "N"],
            correctAnswer: ["Al", "O"],
            time: 7
        },
        {
            level: 31,
            question: " SILICON DIOXIDE",
            options: ["Si", "O", "H", "C", "N"],
            correctAnswer: ["Si", "O"],
            time: 7
        },
        {
            level: 32,
            question: " LITHIUM CHLORIDE",
            options: ["Li", "Cl", "Na", "O", "H"],
            correctAnswer: ["Li", "Cl"],
            time: 6
        },
        {
            level: 33,
            question: " BORIC ACID",
            options: ["H", "B", "O", "N", "C"],
            correctAnswer: ["H", "B", "O"],
            time: 6
        },
        {
            level: 34,
            question: " SODIUM NITRATE",
            options: ["Na", "N", "O", "C", "H"],
            correctAnswer: ["Na", "N", "O"],
            time: 6
        },
        {
            level: 35,
            question: " CALCIUM NITRITE",
            options: ["Ca", "N", "O", "H", "C"],
            correctAnswer: ["Ca", "N", "O"],
            time: 6
        },
        {
            level: 36,
            question: " IRON OXIDE",
            options: ["Fe", "O", "H", "C", "S"],
            correctAnswer: ["Fe", "O"],
            time: 6
        },




    ]
};

/*---------------------------- Variables (state) ----------------------------*/
let currentLevel = 0;
let selectedElements = [];
let timer;
let timeLeft;
let animationIntervals = [];

/*------------------------ Cached Element References ------------------------*/
const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start-btn");
const gameScreen = document.querySelector("#game-screen");
const levelDisplay = document.querySelector("#level-display");
const questionDisplay = document.querySelector("#question-display");
const optionsContainer = document.querySelector("#options-container");
const resultDisplay = document.querySelector("#result");
const nextLevelBtn = document.querySelector("#next-level-btn");
const timerDisplay = document.querySelector("#timer-display");
const resetButtonEl = document.querySelector("#reset-button");
const instructionsScreen = document.querySelector("#instructions-screen");
const instructionsStartBtn = document.querySelector("#instructions-start-btn");
const gameAudio = new Audio ('../assets/game.mp3')
const clapAudio = new Audio('../assets/clap.wav')
const loseAudio = new Audio('../assets/lose.wav')

/*-------------------------------- Functions --------------------------------*/

// Initialize game
function init() {
    resetGame();
}

// Reset Game Function
function resetGame() {
    currentLevel = 0;
    selectedElements = [];
    stopAllAnimations();
    clearInterval(timer);

    resetButtonEl.classList.add("hidden");
    nextLevelBtn.classList.add("hidden");
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    // instructionsScreen.classList.remove("hidden");
    resultDisplay.textContent = "";
    if (timerDisplay) timerDisplay.textContent = "";
}

// Stop all animations
function stopAllAnimations() {
    animationIntervals.forEach(interval => {
        clearInterval(interval);
    });
    animationIntervals = [];
}

// Load Level
function loadLevel() {
    const level = game.levels[currentLevel];

    if (!level) {
        gameComplete();//the goal is when we complete th levels wa can start again
        return;
    }

    selectedElements = [];
    resultDisplay.textContent = "";
    nextLevelBtn.classList.add("hidden");
    resetButtonEl.classList.add("hidden");

    levelDisplay.textContent = "Level " + level.level;
    questionDisplay.textContent = `What elements make up ${level.question}?`;

    // Render Options
    optionsContainer.innerHTML = "";
    level.options.forEach(element => {
        const btn = document.createElement("button");//creat btn for element
        btn.textContent = element;

        btn.addEventListener("click", () => handleChoice(element, btn));
        btn.style.position = "absolute";

        optionsContainer.appendChild(btn);
        animateButton(btn);//for moving part
    });

    // Start timer
    startTimer(level.time);
}

// Animation function
function animateButton(btn) {
    const area = document.getElementById("options-area");
    const btnWidth = 100;
    const btnHeight = 60;

    const maxX = area.clientWidth - btnWidth;
    const maxY = area.clientHeight - btnHeight;

    const interval = setInterval(() => {
        if (!btn.disabled) {
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }
    }, 1000);

    animationIntervals.push(interval);
}

// Start timer
function startTimer(seconds) {
    timeLeft = seconds;
    updateTimerDisplay();

    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    if (timerDisplay) {
        timerDisplay.textContent = `Time: ${timeLeft}s`;
        timerDisplay.style.color = timeLeft <= 3 ? "red" : "white";
    }
}

// Time's up - يرجع للريست تلقائياً
function timeUp() {
    resultDisplay.textContent = "⏰ Time's Up! You lost!";
    resultDisplay.style.color = "#f8f7f7ff";
    loseAudio.play()

    document.querySelectorAll('#options-container button').forEach(btn => {
        btn.disabled = true;
    });


}

// Handle element choice
function handleChoice(element, btn) {
    if (!selectedElements.includes(element)) {
        selectedElements.push(element);
        btn.style.backgroundColor = "#ff9800";
        btn.disabled = true;
        // Stop animation for this button
        btn.style.transform = "none";
    }

    checkAnswer();
}

// Check answer - إذا أجاب خطأ يرجع للريست
function checkAnswer() {
    const level = game.levels[currentLevel];
    const correct = level.correctAnswer;

    const isCorrect =
        selectedElements.length === correct.length &&
        selectedElements.every(e => correct.includes(e)) &&
        correct.every(e => selectedElements.includes(e));

    if (isCorrect) {
        clearInterval(timer);
        resultDisplay.textContent = "Correct! ✔️";
        resultDisplay.style.color = "#45a348ff";
        nextLevelBtn.classList.remove("hidden");
        clapAudio.play()

        document.querySelectorAll('#options-container button').forEach(btn => {
            btn.disabled = true;
    
        });
    } else if (selectedElements.length >= correct.length) {
        resultDisplay.textContent = "Wrong combination! You lost! ❌";
        resultDisplay.style.color = "#fffbfbff";
        resetButtonEl.classList.remove("hidden");
        loseAudio.play()

    }
}

// Game complete
function gameComplete() {
    resultDisplay.textContent = "Congratulations! You finished all levels!";
    levelDisplay.textContent = "Game Completed!";
    questionDisplay.textContent = "";
    optionsContainer.innerHTML = "";
    if (timerDisplay) timerDisplay.textContent = "";
    nextLevelBtn.classList.add("hidden");
    resetButtonEl.classList.add("hidden");
}

/*----------------------------- Event Listeners -----------------------------*/

// Instructions start
instructionsStartBtn.addEventListener("click", () => {
    instructionsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

// Start game
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    currentLevel = 0;
    gameAudio.play()
    loadLevel();
});

// Reset game
resetButtonEl.addEventListener("click", () => {
    resetGame();
});

// Next level
nextLevelBtn.addEventListener("click", () => {
    currentLevel++;

    if (currentLevel >= game.levels.length) {
        gameComplete();
    } else {
        loadLevel();
    }
});

// Initialize game when loaded
document.addEventListener('DOMContentLoaded', init);