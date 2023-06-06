// The following JS was adapted and amalgamated from the following tutorials and checked and polished by an online tutor from Preply.com
// https://www.sitepoint.com/simple-javascript-quiz/
// https://github.com/KateEllen/Animal-Quiz/blob/main/assets/js/script.js
// https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=EasyTutorials


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

const finalModal = document.querySelector("#closingModal");
const scoreText = document.querySelector("#score-text");
const tryAgainButton = document.querySelector("#try-again");


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

// Event listeners (category choice, A,B,C answer buttons)
generalButton.addEventListener('click', categoryClick);
pgfButton.addEventListener('click', categoryClick);
scienceButton.addEventListener('click', categoryClick);

buttonA.addEventListener('click', checkAnswer);
buttonB.addEventListener('click', checkAnswer);
buttonC.addEventListener('click', checkAnswer);
modalClose.addEventListener('click', hideInfoModal);

tryAgainButton.addEventListener('click', reloadGame);

// Choose category of questions
function categoryClick(event) {
    console.log(event);
    let categoryName = event.target.textContent;
    console.log(event.target.textContent);
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    questions = [];
    for (let question of questionsList) {
        if (question.section === categoryName) {
            questions.push(question);
        }
    }
    console.log(questions);
    displayQuestion();
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

// Display info modal
function showInfoModal() {
    let questionData = questions[index];
    infoText.innerHTML = "The correct answer is " + questionData.correct + "<br><br>" + questionData.info;
    overlay.classList.remove("hidden");
    displayInfoModal();
}

// Next question OR end of quiz
function goToNextQuestion() {
    index++;
    overlay.classList.add("hidden");
    if (index < questions.length) {
        displayQuestion();
    }
    else {
        let output;
        if (correctCount < 4) {
            output = "Literally worse than if you'd guessed every question. Some remedial sasquatch study is required";
        } else if (correctCount < 5) {
            output = "People refer to you as a skunk ape and it's not a compliment at all";
        } else if (correctCount < 6) {
            output = "Your footprints are small and shallow, barely worth casting, and you hardly even show up on thermal vision cameras";
        } else if (correctCount < 7) {
            output = "You're blurry and fairly distant. Not many people believe in you, and embarrassingly, Bill Munns has analysed footage of your breasts";
        } else if (correctCount < 8) {
            output = "You have a grasp of the subject but spend too much time doing woodknocks and howling into the night";
        } else if (correctCount < 9) {
            output = "You're a Fairly-big-foot, your body is covered in orange-brown hair, you once kidnapped Albert Ostman and since that experience you've never been able to try snuff again";
        } else if (correctCount < 10) {
            output = "You have an 4-foot stride-length with minimal straddle. You like peanut butter and apples. Grover Krantz knows your foot morphology. Well done on an excellent score";
        } else {
            output = "Your proportional DNA bars are pretty much identical. You communicate with humans only through mind-speak. You're a phase-shifting mystic sasquatch associated with ball-lightning. Perfect score!";
        }
        scoreText.innerHTML = `<h2>Score</h2>
    <p>Your score in this section: ${correctCount}</p>
    <p>${output}</p><br><br>`;
        finalModal.classList.remove('hidden');
        overlay.classList.remove("hidden");
    }
}

// Reset scores
function reloadGame() {
    finalModal.classList.add('hidden');
    correctCount = 0;
    incorrectCount = 0;
    index = 0;
    questions = [];
    correctCountText.textContent = correctCount;
    incorrectCountText.textContent = incorrectCount;
    introModal();
}

