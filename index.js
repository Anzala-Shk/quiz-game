// Quiz questions array
const quizQuestions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What category does an apple belong to?",
        choices: ["Vegetables", "Fruits", "Meat", "Dairy"],
        correctAnswer: "Fruits"
    },
    {
        question: "How many days are in a week?",
        choices: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "What is 13 + 13?",
        choices: ["24", "25", "26", "27"],
        correctAnswer: "26"
    },
    {
        question: "How many seconds are in an hour?",
        choices: ["3000", "3600", "4000", "4500"],
        correctAnswer: "3600"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timeLimit = 30;
let timer;

// Initialize quiz
function startQuiz() {
    showQuestion();
    startTimer();
}

// Show the current question
function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    
    // Clear previous choices
    choicesElement.innerHTML = '';

    // Get current question
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Update question text
    questionElement.textContent = currentQuestion.question;

    // Display answer choices
    currentQuestion.choices.forEach(choice => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice));
        li.appendChild(button);
        choicesElement.appendChild(li);
    });
}

// Check the selected answer
function checkAnswer(choice) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (choice === currentQuestion.correctAnswer) {
        correctAnswers++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Start the countdown timer
function startTimer() {
    timer = setInterval(function() {
        if (timeLimit > 0) {
            document.getElementById('timer').textContent = `Time left: ${timeLimit} seconds`;
            timeLimit--;
        } else {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// End the quiz and show the final result
function endQuiz() {
    clearInterval(timer);

    // Hide quiz content and show result
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    const resultMessage = `You answered ${correctAnswers} out of ${quizQuestions.length} questions correctly.`;
    document.getElementById('finalResult').textContent = resultMessage;
}

// Start the quiz
startQuiz();
