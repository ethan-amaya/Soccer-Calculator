var number0 = document.getElementById("number0");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var number4 = document.getElementById("number4");
var number5 = document.getElementById("number5");
var number6 = document.getElementById("number6");
var number7 = document.getElementById("number7");
var number8 = document.getElementById("number8");
var number9 = document.getElementById("number9");
var divButton = document.getElementById("division");
var multButton = document.getElementById("multiplication");
var subButton = document.getElementById("subtraction");
var addButton = document.getElementById("addition");
var clearButton = document.getElementById("clear");
var equalsButton = document.getElementById("equals");
var answerLabel = document.getElementById("answer-label");
var soccerMode = document.getElementById("soccerMode");

let answerString = "";
let totalString = "";
let cleared = false;

let addSelected = false;
let subSelected = false;
let multSelected = false;
let divSelected = false;

let goalsSelected = false;
let assistsSelected = false;
let csSelected = false;
let ptsSelected = false;

let num1;
let num2;
let num3;

let num1TF = false;

let total;

let converted = false;

let stage1 = false;
let stage2 = false;
let stage3 = false;

number0.addEventListener("click", function() {
    if(cleared == true){
        answerString = "0";
        cleared = false;
    }
    else {
        answerString += "0"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number1.addEventListener("click", function() {
    if(cleared == true){
        answerString = "1";
        cleared = false;
    }
    else {
        answerString += "1"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number2.addEventListener("click", function() {
    if(cleared == true){
        answerString = "2";
        cleared = false;
    }
    else {
        answerString += "2"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number3.addEventListener("click", function() {
    if(cleared == true){
        answerString = "3";
        cleared = false;
    }
    else {
        answerString += "3"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number4.addEventListener("click", function() {
    if(cleared == true){
        answerString = "4";
        cleared = false;
    }
    else {
        answerString += "4"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number5.addEventListener("click", function() {
    if(cleared == true){
        answerString = "5";
        cleared = false;
    }
    else {
        answerString += "5"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number6.addEventListener("click", function() {
    if(cleared == true){
        answerString = "6";
        cleared = false;
    }
    else {
        answerString += "6"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number7.addEventListener("click", function() {
    if(cleared == true){
        answerString = "7";
        cleared = false;
    }
    else {
        answerString += "7"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number8.addEventListener("click", function() {
    if(cleared == true){
        answerString = "8";
        cleared = false;
    }
    else {
        answerString += "8"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

number9.addEventListener("click", function() {
    if(cleared == true){
        answerString = "9";
        cleared = false;
    }
    else {
        answerString += "9"
    }
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
});

divButton.addEventListener("click", function() {
    num1 = parseFloat(answerString);
    answerString = ""
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    divSelected = true;
    divButton.style.backgroundColor = "#AEAE34";
});

multButton.addEventListener("click", function() {
    num1 = parseFloat(answerString);
    answerString = ""
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    multSelected = true;
    multButton.style.backgroundColor = "#AEAE34";
});

subButton.addEventListener("click", function() {
    num1 = parseFloat(answerString);
    answerString = ""
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    subSelected = true;
    subButton.style.backgroundColor = "#AEAE34";
});

addButton.addEventListener("click", function() {
    num1 = parseFloat(answerString);
    answerString = ""
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    addSelected = true;
    addButton.style.backgroundColor = "#AEAE34";
});

clearButton.addEventListener("click", function() {
    answerString = "";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    cleared = true;
    clearOperations();
});

equalsButton.addEventListener("click", equal);

function equal() {
    num2 = parseFloat(answerString);
    doMath();
    answerString = total.toString();
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    clearOperations();
}

soccerMode.addEventListener("click", convertSoccer);

function convertSoccer() {
    divButton.innerHTML = "⚽";
    multButton.innerHTML = "🅰️";
    subButton.innerHTML = "🖐️";
    addButton.innerHTML = "🌟"
    equalsButton.innerHTML = "✅";
    soccerMode.removeEventListener("click", convertSoccer);
    soccerMode.addEventListener("click", reverseConvert);
    soccerMode.innerHTML = "Standard Calculator";
    divButton.removeEventListener("click", div);
    divButton.addEventListener("click", selectGoals);
    multButton.removeEventListener("click", mult);
    multButton.addEventListener("click", selectAssits);
    subButton.removeEventListener("click", sub);
    subButton.addEventListener("click", selectCS);
    addButton.removeEventListener("click", add);
    addButton.addEventListener("click", selectPTS);
    equalsButton.removeEventListener("click", equal);
    equalsButton.addEventListener("click", moveOn);
}

function reverseConvert() {
    soccerMode.removeEventListener("click", reverseConvert);
    soccerMode.addEventListener("click", convertSoccer);
    soccerMode.innerHTML = "Soccer Mode"
    divButton.innerHTML = "÷";
    multButton.innerHTML = "×";
    subButton.innerHTML = "-";
    addButton.innerHTML = "+";
    equalsButton.innerHTML = "=";
    equalsButton.removeEventListener("click", moveOn);
    equalsButton.addEventListener("click", equal);
    divButton.removeEventListener("click", selectGoals);
    divButton.addEventListener("click", div);
    multButton.removeEventListener("click", selectAssits);
    multButton.addEventListener("click", mult);
    subButton.removeEventListener("click", selectCS);
    subButton.addEventListener("click", sub);
    addButton.removeEventListener("click", selectPTS);
    addButton.addEventListener("click", add);
}

function clearOperations(){
    divSelected = false;
    addSelected = false;
    subSelected = false;
    multSelected = false;
    goalsSelected = false;
    assistsSelected = false;
    csSelected = false;
    ptsSelected = false;
    stage1 = false;
    stage2 = false;
    stage3 = false;
    divButton.style.backgroundColor = '';
    addButton.style.backgroundColor = '';
    subButton.style.backgroundColor = '';
    multButton.style.backgroundColor = '';
}

function add(){
    total = num1 + num2;
}

function sub() {
    total = num1 - num2;
}

function mult(){
    total = num1 * num2;
    total = Math.round(total * 1e5) / 1e5;
    if(total - Math.floor(total) <= 0.00001) {
        total = Math.floor(total);
    }
}

function div() {
    total = num1 / num2;
    if(num1 % num2 != 0) {
        total = Math.round(total * 1e6) / 1e6;
    }
    if(total - Math.floor(total) <= 0.00001) {
        total = Math.floor(total);
    }
}

function doMath() {
    if(addSelected == true){
        add();
    }
    if(subSelected == true){
        sub();
    }
    if(multSelected == true){
        mult();
    }
    if(divSelected == true){
        div();
    }
}

function selectGoals(){
    goalsSelected = true;
    moveOn();
}

function selectAssits(){
    assistsSelected = true;
    moveOn();
}

function selectCS(){
    csSelected = true;
    moveOn();
}

function selectPTS(){
    ptsSelected = true;
    moveOn();
}

function xGoals1() {
    answerString = "Enter total goals scored so far: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xGoals2(){
    num1 = parseFloat(answerString);
    answerString = "Enter total games played so far: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xGoals3(){
    num2 = parseFloat(answerString);
    answerString = "Enter total games remaining: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xGoalsCalc(){
    num3 = parseFloat(answerString);
    total = (num1 / num2) * (num2 + num3);
    total = Math.round(total * 1e5) / 1e5;
    if(total - Math.floor(total) <= 0.00001) {
        total = Math.floor(total);
    }
    answerString = "Predicted goals in " + (num2 + num3) + " games: " + total;
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
    clearOperations();
}

function xAssits1() {
    answerString = "Enter total assists so far: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xAssits2(){
    num1 = parseFloat(answerString);
    answerString = "Enter total games played so far: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xAssits3(){
    num2 = parseFloat(answerString);
    answerString = "Enter total games remaining: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xAssitsCalc(){
    num3 = parseFloat(answerString);
    total = (num1 / num2) * (num2 + num3);
    total = Math.round(total * 1e5) / 1e5;
    if(total - Math.floor(total) <= 0.00001) {
        total = Math.floor(total);
    }
    answerString = "Predicted assists in " + (num2 + num3) + " games: " + total;
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
    clearOperations();
}

function xCS1() {
    answerString = "Enter total clean sheets so far: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xCS2(){
    num1 = parseFloat(answerString);
    answerString = "Enter total games played so far: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xCS3(){
    num2 = parseFloat(answerString);
    answerString = "Enter total games remaining: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xCSCalc(){
    num3 = parseFloat(answerString);
    total = (num1 / num2) * (num2 + num3);
    total = Math.round(total * 1e5) / 1e5;
    if(total - Math.floor(total) <= 0.00001) {
        total = Math.floor(total);
    }
    answerString = "Predicted clean sheets in " + (num2 + num3) + " games: " + total;
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
    clearOperations();
}

function xpts1() {
    answerString = "Enter total points so far: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xpts2(){
    num1 = parseFloat(answerString);
    answerString = "Enter total games played so far: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xpts3(){
    num2 = parseFloat(answerString);
    answerString = "Enter total games remaining: ";
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
}

function xptsCalc(){
    num3 = parseFloat(answerString);
    total = (num1 / num2) * (num2 + num3);
    total = Math.round(total * 1e5) / 1e5;
    if(total - Math.floor(total) <= 0.00001) {
        total = Math.floor(total);
    }
    answerString = "Predicted points in " + (num2 + num3) + " games: " + total;
    answerLabel.innerHTML = '<span>' + answerString + '</span>';
    answerString = "";
    clearOperations();
}

function moveOn() {
    if(goalsSelected){
        if(stage1 == false){
            stage1 = true;
            xGoals1();
        }
        else if(stage2 == false){
            stage2 = true;
            xGoals2();
        }
        else if(stage3 == false){
            stage3 = true;
            xGoals3();
        }
        else{
            xGoalsCalc();
        }
    }
    if(assistsSelected){
        if(stage1 == false){
            stage1 = true;
            xAssits1();
        }
        else if(stage2 == false){
            stage2 = true;
            xAssits2();
        }
        else if(stage3 == false){
            stage3 = true;
            xAssits3();
        }
        else{
            xAssitsCalc();
        }
    }
    if(csSelected){
        if(stage1 == false){
            stage1 = true;
            xCS1();
        }
        else if(stage2 == false){
            stage2 = true;
            xCS2();
        }
        else if(stage3 == false){
            stage3 = true;
            xCS3();
        }
        else{
            xCSCalc();
        }
    }
    if(ptsSelected){
        if(stage1 == false){
            stage1 = true;
            xpts1();
        }
        else if(stage2 == false){
            stage2 = true;
            xpts2();
        }
        else if(stage3 == false){
            stage3 = true;
            xpts3();
        }
        else{
            xptsCalc();
        }
    }
}