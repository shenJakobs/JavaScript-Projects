function addition_Function() {
    var addition = 9 + 10;
    document.getElementById("Add").innerHTML ="9 + 10 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Sub").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var mul = 5 * 5;
    document.getElementById("Mul").innerHTML = "5 * 5 = " + mul
}

function divison() {
    var div= 12 / 4;
    document.getElementById("Div").innerHTML = "12 / 4 = " + div;
}

function more_Math() {
    var simple_Math= (1 + 2) * 10 /2 - 5;
    document.getElementById("MulOp").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtract by 5 equals" + simple_Math;
}

function modulus_Operator() {
    var  Mod = 25 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + Mod;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("x").innerHTML = -x;
}

function Increment () {
var P = 5;
P++;
document.write(P)
}

function Decrement () {
var H = 5.25; 
H--;
document.write(H)
}

function random() {
window.alert(Math.random() *100);
}