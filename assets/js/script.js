//questions array question,choices, answer
//declare global variables from html


//track time
var qindex=0

var time=questions.length * 20
var timerid;//set interval 

var timeEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

//create clock funtion
//eventlistner to funtion 1
//F1 = hide intro, unhide questions and start the clock with set interval

//F2 = pull in a question, for loop create button

//F3 = if statement 