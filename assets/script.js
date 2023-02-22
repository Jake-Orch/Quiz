//create variables for elements i want to create
//when i click start set the first div display to block, also, set the begin div display to none
//
var timeEl = document.getElementById("time")
var beginEl = document.getElementById("begin");
var beginBtn = document.body.children[1].children[2];
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var allQuestions = document.getElementById("questions")

var timeLeft = 60;
timeEl.textContent = timeLeft + " seconds to finish the quiz"
function countDown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left"

        if (timeLeft <= 15 && timeLeft > 0) {
            timeEl.textContent = timeLeft + " seconds left, Hurry!"
        } else if (timeLeft <= 0) {
            clearInterval(timeInterval);
            // add end game function here
            timeEl.setAttribute('style', 'display: none');
            allQuestions.setAttribute('style', 'display: none')
        }
    }, 1000);
}

beginBtn.addEventListener('click', function () {
    countDown()
    beginEl.setAttribute('style', 'display: none');
    question1.setAttribute('style', 'display: block');
});


allQuestions.addEventListener('click', function (event) {
    var target = event.target;
    var questionBox = target.parentElement.parentElement;
    const state = target.getAttribute('data-state');
    if (state === "correct") {
    console.log("correct");
    console.log(this);
    console.log(target.parentElement.parentElement);
    questionBox.setAttribute('style', 'display: none');
    questionBox.nextElementSibling.setAttribute('style', 'display: block');
    } else {
        timeLeft = timeLeft - 5;

    }
});
