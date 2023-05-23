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



// Prev. functions - might not need?
// function generalQs() {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// };

// function pgfQs() {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//     questionText.innerHTML = questions.PGF[0].question;
// };

// function scienceQs() {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// };


/**
 * 
 * 
 */




/*
let questionText = document.getElementsByClassName("questions")
questionText.innerHTML = questions.PGF[0].question


var correct = 0; 
var incorrect = 0;


function check(answer) {
    if (answer == 'A') {
        correct++
    } else {
        incorrect++
    }
}
*/

/*
Correct answer should have an ID of 'correct/right' or similar so that I don't have to have a unique function run for each Q, how can I insert this into each question and answer?

Where do I store the questions, answers and info text? In the HTML? In a separate text file (as I have now)? How do I make each Q show up sequentially?
--> questions inside an array..! 

Answering (either correctly or wrongly) should bring up an information pop-up. Need to work out how to display this.

Extras: 
introduce each new section (Section 1 - general sasquatchery etc.) - need a pop-up for these
insert pictures into info pop-ups? 
socials to have some cool graphics/animations??
*/