function makeButton(text, callback) {
    return "<button onclick='"+callback+"'>"+text+"</button>";
}




// TEST RESPONSES
var currentOS = "";
var commandLine = "";
// END TEST RESPONSES

function secondQuestion() {
    var question = document.getElementById("testquestion");
    var buttons = document.getElementById("testbuttons");

    question.innerHTML = "Are you familiar with the command line?";
    buttons.innerHTML = makeButton("No", () => {currentOS="win"}) + makeButton("Somewhat", () => {currentOS="mac"}) + makeButton("Yes", () => {currentOS="other"});
}

function start() {
    var question = document.getElementById("testquestion");
    var buttons = document.getElementById("testbuttons");

    question.innerHTML = "Where are you coming from?";
    buttons.innerHTML = makeButton("Windows", () => {currentOS="win"; secondQuestion()}) + makeButton("MacOS", () => {currentOS="mac"; secondQuestion()}) + makeButton("Other", () => {currentOS="other"; secondQuestion()});

}