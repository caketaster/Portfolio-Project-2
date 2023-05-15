/**
 * 
 * 
 */

let questionText = document.getElementById("questions");
questionText.innerHTML = /questions.json/PGF[0].question;


/*

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