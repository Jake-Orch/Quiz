//create variables for elements i want to create
//when i click start set the first div display to block, also, set the begin div display to none
//
var timeEl = document.getElementById('time')
var beginEl = document.getElementById('begin');
var beginBtn = document.body.children[1].children[2];
var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
var question4 = document.getElementById('question4');
var question5 = document.getElementById('question5');
var allQuestions = document.getElementById('questions');
var formDiv = document.querySelector('.form');
var inputClass = document.querySelector('input');
var initialsInput = document.getElementById('initials');
var scoreInput = document.getElementById('score');
var saveInfoBtn = document.getElementById('save-info');
var timeLeft = 60;
var scoreData = 0

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
            formDiv.setAttribute('style', 'display: block');
        }
    }, 1000);
}

function answerCorrect(event) {
    var target = event.target;
    var questionBox = target.parentElement.parentElement;
    questionBox.setAttribute('style', 'display: none');
    questionBox.nextElementSibling.setAttribute('style', 'display: block');
}

function answerIncorrect(event) {
    var target = event.target;
    var questionBox = target.parentElement.parentElement;
    timeLeft = timeLeft - 5;
    questionBox.setAttribute('style', 'display: none');
    questionBox.nextElementSibling.setAttribute('style', 'display: block');
}

function q5Correct(event) {
    var target = event.target;
    var questionBox = target.parentElement.parentElement;
    questionBox.setAttribute('style', 'display: none');
    formDiv.setAttribute('style', 'display: block');
    timeLeft = 0;
}

function q5Incorrect(event) {
    var target = event.target;
    var questionBox = target.parentElement.parentElement;
    questionBox.setAttribute('style', 'display: none');
    formDiv.setAttribute('style', 'display: block');
    timeLeft = 0;
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
    if (questionBox === question5 && state === "correct") {
        event.stopPropagation();
        scoreData = scoreData + 1;
        target.setAttribute('style', 'background-color: green');
        setTimeout(function () {
            q5Correct(event);
        }, 1000)

        console.log(scoreData);
    } else if (questionBox === question5 && state === "wrong") {
        event.stopPropagation();
        target.setAttribute('style', 'background-color: red');
        setTimeout(function () {
            q5Incorrect(event);
        }, 1000)

        console.log(scoreData);
    } else if (state === "correct") {
        event.stopPropagation();
        scoreData = scoreData + 1;
        target.setAttribute('style', 'background-color: green');
        setTimeout(function () {
            answerCorrect(event);
        }, 1000)

        console.log(scoreData);
    } else if (state === "wrong") {
        event.stopPropagation();
        target.setAttribute('style', 'background-color: red');
        setTimeout(function () {
            answerIncorrect(event);
        }, 1000)
        console.log(scoreData);
    } else {
        return;
    }
});

saveInfoBtn.addEventListener('click', function () {
    var userInfo = {
        initials: initialsInput.value,
        score: scoreInput.value
    }
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
}); 