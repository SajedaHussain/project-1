// Game Data
const game = {
    levels: [
        {
            level: 1,
            question: "What elements make up WATER?",
            options: ["H", "O", "C", "N", "Ar"],
            correctAnswer: ["H", "O"],
            time: 7 //seconds
        },
        {
            level: 2,
            question: "What elements make up CARBON DIOXIDE?",
            options: ["C", "O", "H", "F"],
            correctAnswer: ["C", "O"],
            time: 7
        },
        {
            level: 3,
            question: "What elements make up AMMONIA?",
            options: ["N", "H", "O", "Ar"],
            correctAnswer: ["N", "H"],
            time: 6
        },
        {
            level: 4,
            question: "What elements make up METHANE?",
            options: ["C", "H", "O", "N"],
            correctAnswer: ["C", "H"],
            time: 5
        },
        {
            level: 5,
            question: "What elements make up SODIUM CHLORIDE?",
            options: ["Na", "Cl", "O", "H"],
            correctAnswer: ["Na", "Cl"],
            time: 4
        }
    ]
};

// State
let currentLevel = 0;
let selectedElements = [];
let timer;
let timeLeft;
let animationIntervals = []; // لتخزين الـ intervals للحركات

// Elements
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const gameScreen = document.getElementById("game-screen");
const levelDisplay = document.getElementById("level-display");
const questionDisplay = document.getElementById("question-display");
const optionsContainer = document.getElementById("options-container");
const resultDisplay = document.getElementById("result");
const nextLevelBtn = document.getElementById("next-level-btn");
const timerDisplay = document.getElementById("timer-display");
const resetButtonEl = document.querySelector("#reset-button");

// instructions
const instructionsScreen = document.getElementById("instructions-screen");
const instructionsStartBtn = document.getElementById("instructions-start-btn");

instructionsStartBtn.addEventListener("click", () => {
    instructionsScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    loadLevel();
});

// Start
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    resetButtonEl.classList.add("hidden");
    loadLevel();
});

// Reset Game
resetButtonEl.addEventListener("click", () => {
    resetGame();
});

//Reset Game Function
function resetGame() {
    currentLevel = 0;
    selectedElements = [];

    if (timer) {
        clearInterval(timer);
    }
    
    // إيقاف كل الحركات العشوائية
    stopAllAnimations();
    
    resetButtonEl.classList.add("hidden");
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    resultDisplay.textContent = "";
    if (timerDisplay) timerDisplay.textContent = "";
}

// إيقاف كل الحركات العشوائية
function stopAllAnimations() {
    animationIntervals.forEach(interval => {
        clearInterval(interval);
    });
    animationIntervals = [];
}

// Load Level
function loadLevel() {
    const level = game.levels[currentLevel];

    selectedElements = [];
    resultDisplay.textContent = "";
    nextLevelBtn.classList.add("hidden");
    resetButtonEl.classList.add("hidden");

    levelDisplay.textContent = "Level " + level.level;
    questionDisplay.textContent = level.question;

    // بدء التايمر
    startTimer(level.time);

    // Render Options
    optionsContainer.innerHTML = "";
    level.options.forEach(elemen => {
        const btn = document.createElement("button");
        btn.textContent = elemen;

        btn.addEventListener("click", () => handleChoice(elemen, btn));
        btn.style.position = "relative";

        optionsContainer.appendChild(btn);
        
        // إضافة الحركة العشوائية للزر
        animateButton(btn);
    });
}

function animateButton(btn) {
    let maxX = 250; // الحركة العشوائية
    let maxY = 250;

    const interval = setInterval(() => {
        if (!btn.disabled) { // فقط إذا الزر مش معطل
            const x = Math.random() * maxX - maxX/2;
            const y = Math.random() * maxY - maxY/2;
            btn.style.transform = `translate(${x}px, ${y}px)`;
        }
    }, 1000);
    
    animationIntervals.push(interval); // حفظ الـ interval عشان نقدر نوقفه
}

// بدء التايمر
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

// تحديث عرض التايمر
function updateTimerDisplay() {
    if (timerDisplay) {
        timerDisplay.textContent = `Time: ${timeLeft}s`;
        timerDisplay.style.color = timeLeft <= 2 ? "red" : "white";
    }
}

// انتهاء الوقت
function timeUp() {
    resultDisplay.textContent = "⏰ Time's Up! You lost!";
    resultDisplay.style.color = "#f44336";

    // تعطيل جميع الأزرار
    document.querySelectorAll('#options-container button').forEach(btn => {
        btn.disabled = true;
    });
     
    resetButtonEl.classList.remove("hidden");

    setTimeout(() => {
        resultDisplay.textContent = "Press RESET to play again";
    }, 1500);
}

// إعادة تشغيل المستوى
function restartLevel() {
    currentLevel = 0;
    selectedElements = [];
    resultDisplay.textContent = "Restarting from Level 1 ...";
    resetButtonEl.classList.remove("hidden");
    loadLevel();
}

// Handle element choice
function handleChoice(el, btn) {
    if (!selectedElements.includes(el)) {
        selectedElements.push(el);
        btn.style.backgroundColor = "#ff9800";
        btn.disabled = true;
        btn.style.transform = "translate(0, 0)"; // إيقاف الحركة عند النقر
    }

    checkAnswer();
}

// Check answer
function checkAnswer() {
    const correct = game.levels[currentLevel].correctAnswer;

    const isCorrect =
        selectedElements.length === correct.length &&
        selectedElements.every(e => correct.includes(e));

    if (isCorrect) {
        clearInterval(timer);
        resultDisplay.textContent = "Correct! ✔️";
        resultDisplay.style.color = "#4CAF50";
        nextLevelBtn.classList.remove("hidden");

        // تعطيل جميع الأزرار بعد الإجابة الصحيحة
        document.querySelectorAll('#options-container button').forEach(btn => {
            btn.disabled = true;
            btn.style.transform = "translate(0, 0)"; // إيقاف الحركة
        });
    } else if (selectedElements.length >= correct.length) {
        resultDisplay.textContent = "Try Again! ❌";
        resultDisplay.style.color = "#f44336";
        resetButtonEl.classList.remove("hidden");
        
        setTimeout(() => {
            restartLevel();
        }, 1500);
    }
}

// Next Level
nextLevelBtn.addEventListener("click", () => {
    currentLevel++;

    if (currentLevel >= game.levels.length) {
        resultDisplay.textContent = "🎉 You finished all levels!";
        levelDisplay.textContent = "Game Completed!";
        questionDisplay.textContent = "";
        optionsContainer.innerHTML = "";
        if (timerDisplay) timerDisplay.textContent = "";
        nextLevelBtn.classList.add("hidden");
        resetButtonEl.classList.remove("hidden");
        return;
    }

    loadLevel();
});