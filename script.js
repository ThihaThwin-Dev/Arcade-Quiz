var result;
var startState = false;
function start() {
    startState = true;
    document.getElementById("scoreGrid").style.display = "none";
    document.getElementById("activeBody").style.display = "";
    document.getElementById("startBtn").setAttribute("class", "btnstart inactiveStart");
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
    document.getElementById("scoreBoard").innerText = "";
    document.getElementById("timePlayed").innerText = "";
    document.getElementById("stopBtn").setAttribute("class", "btnstop activeStop");
    quiz();
    chooseAnswer();
}
function stop() {
    startState = false;
    document.getElementById("startBtn").setAttribute("class", "btnstart activeStart");
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("stopBtn").setAttribute("class", "btnstop inactiveStop");
    document.getElementById("timePlayed").innerText = "";
    scoreHistory();
}
function quiz() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    var operator = Math.round(Math.random() * 3);
    switch (operator) {
        case 0:
            var x = num1 + "*" + num2;
            result = num1 * num2;
            break;
        case 1:
            var x = num1 + "+" + num2;
            result = num1 + num2;
            break;
        case 2:
            var x = num1 + "-" + num2;
            result = num1 - num2;
            break;
        case 3:
            var x = num1 + "/" + num2;
            result = num1 / num2;
            result = Math.round(result * 100) / 100;
            break;
    }
    document.getElementById("randomNo").innerText = x;
    chooseAnswer();
}
function chooseAnswer() {
    var operator = Math.round(Math.random() * 2);
    switch (operator) {
        case 0:
            document.getElementById("firstCell").innerText = result;
            document.getElementById("secondCell").innerText = result + Math.round(Math.random() * 100);
            document.getElementById("thirdCell").innerText = result + Math.round(Math.random() * 50);
            break;
        case 1:
            document.getElementById("firstCell").innerText = result + Math.round(Math.random() * 100);
            document.getElementById("secondCell").innerText = result;
            document.getElementById("thirdCell").innerText = result + Math.round(Math.random() * 50);
            break;
        case 2:
            document.getElementById("firstCell").innerText = result + Math.round(Math.random() * 50);
            document.getElementById("secondCell").innerText = result + Math.round(Math.random() * 100);
            document.getElementById("thirdCell").innerText = result;
            break;
    }
}
function answerPress(cellbtn) {
    if (startState){
    if (cellbtn.innerText == result) {
        var scorepoint = document.getElementById("scoreBoard").innerText;
        var finalscore = +scorepoint + 10;
        document.getElementById("scoreBoard").innerText = finalscore;
    }
    else {
        var scorepoint = document.getElementById("scoreBoard").innerText;
        var finalscore = +scorepoint - 10;
        document.getElementById("scoreBoard").innerText = finalscore;
    }
    timePlayed();
    quiz();
    }
}
function scoreHistory() {
    var highScore = (document.getElementById("scoreBoard").innerText);
    document.getElementById("history").innerHTML += `<li>Your Score is ${highScore}</li>`;// changed to dynamic
    document.getElementById("scoreBoard").innerHTML = "";
}
function resetAll() {
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("startBtn").setAttribute("class", "btnstart activeStart");
    document.getElementById("scoreBoard").innerText = "000000";
    document.getElementById("timePlayed").innerText = "000000";
    document.getElementById("history").innerHTML = "";
    document.getElementById("firstCell").innerText = "";
    document.getElementById("secondCell").innerText = "";
    document.getElementById("thirdCell").innerText = "";
    document.getElementById("randomNo").innerText = "";
    document.getElementById("scoreGrid").style.display = "";
}
function timePlayed() {
    var count = document.getElementById("timePlayed").innerText;
    var finalcount = +count + 1;
    document.getElementById("timePlayed").innerText = finalcount;
}
