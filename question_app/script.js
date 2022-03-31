const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElements = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion()
})

function startGame() {
startButton.classList.add("hide");
questionContainerElement.classList.remove("hide");
shuffledQuestions = questions.sort(() => Math.random() - 0.5);
currentQuestionIndex = 0;
setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
questionElement.innerText = question.question;
question.answers.forEach(answer => {
const button = document.createElement("button")
button.innerText = answer.text
button.classList.add("btn")
if (answer.correct) {
    button.dataset.correct = answer.correct
}
button.addEventListener("click", selectAnswer)
answerButtonElements.appendChild(button)
}) 
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide");
    while (answerButtonElements.firstChild) {
        answerButtonElements.removeChild(answerButtonElements.firstChild)
    }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonElements.children).forEach(button => {
setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove("hide")
} else {
    startButton.classList.remove("hide")
    startButton.innerText = "Restart"
}
}

function setStatusClass(element, correct) {
clearStatusClass(element)
if (correct) {
    element.classList.add("correct")
} else {
    element.classList.add("wrong")
}
}

function clearStatusClass(element) {
    element.classList.remove("wrong")
    element.classList.remove("correct")
}

const questions = [
    {
        question: "Dá si se mnou dnes Martin pívo?",
        answers: [
            {text: "nedá", correct: false},
            {text: "dá", correct: true},
           /* {text: "Táta Dvořák starý", correct: false},
            {text: "Tonda mimi", correct: false},*/
        ]
    },
    {
        question: "Naučí se Sabča někdy anglicky?",
        answers: [
            {text: "Nenaučí", correct: false},
            {text: "To ví jen bůh", correct: true},
            {text: "Naučí", correct: false},
           /* {text: "Je někde s kurvama", correct: false},*/
        ]
    },
    {
    
        question: "Kdo má na Podlázkách největší bicák?",
        answers: [
            {text: "Rosie", correct: false},
            {text: "Turbo", correct: false},
            {text: "Jakub Dvořák", correct: true},
            {text: "Martin Šnýdr Kovařík", correct: false},
        ]
    }
    
]