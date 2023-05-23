// Define all constants needed

const modal = document.querySelector(".intro-modal");
const overlay = document.querySelector(".overlay");
let questionText = document.getElementsByClassName("qtext");

const generalButton = document.querySelector('#btn-general');
const pgfButton = document.querySelector('#btn-PGF');
const scienceButton = document.querySelector('#btn-science');
const qtext = document.querySelector("#qtext");
const answerAText = document.querySelector("#answer-a");
const answerBText = document.querySelector("#answer-b");
const answerCText = document.querySelector("#answer-c");

const buttonA = document.querySelector("#btn-A");
const buttonB = document.querySelector("#btn-B");
const buttonC = document.querySelector("#btn-C");

const correctCountText = document.querySelector("#correct");
const incorrectCountText = document.querySelector("#incorrect");

const infoModal = document.querySelector("#infoModal");
const infoText = document.querySelector('#info-text');

const modalClose = document.querySelector("#modal-close");

let questions = [];
let index = 0;

let correctCount = 0;
let incorrectCount = 0;

// Intro modal, info modal (display/hide)
function introModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
function displayInfoModal() {
    infoModal.classList.remove("hidden");
}
function hideInfoModal() {
    infoModal.classList.add("hidden");
    goToNextQuestion();
}
introModal();

//Listen for category button clicks
generalButton.addEventListener("click", categoryClick);
pgfButton.addEventListener('click', categoryClick);
scienceButton.addEventListener('click', categoryClick);

buttonA.addEventListener('click', checkAnswer);
buttonB.addEventListener('click', checkAnswer);
buttonC.addEventListener('click', checkAnswer);
modalClose.addEventListener('click', hideInfoModal);

// Choose category of questions
function categoryClick(event) {
    let categoryName = event.target.textContent;
    console.log(categoryName);
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    questions = [];
    for (let question of questionsList) {
        if (question.section === categoryName) {
            questions.push(question);
        }
    }
    console.log(questions);
}

// Display each question
function displayQuestion() {
    let questionData = questions[index];
    qtext.textContent = questionData.question;
    answerAText.textContent = questionData.A;
    answerBText.textContent = questionData.B;
    answerCText.textContent = questionData.C;
}

// Check if answer is correct
function checkAnswer(event) {
    let option = event.target.textContent;
    let questionData = questions[index];
    let selectedAnswer = questionData[option];
    let correctAnswer = questionData.correct;
    if (selectedAnswer === correctAnswer) {
        correctCount++;
        correctCountText.textContent = correctCount;
    }
    else {
        incorrectCount++;
        incorrectCountText.textContent = incorrectCount;
    }
    showInfoModal();
}

