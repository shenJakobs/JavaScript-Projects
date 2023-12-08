var X = 60;
function Add_numbers_1() {
    document.write(40 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 10);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3(){
    var C= 40;
    document.write(60 + C + "<br>");
}
function Add_numbers_4() {
    document.write(C + 60);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if(new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "HOW ARE YOU TODAY!";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").ariaValueMax;
    if (Age >= 18) {
        Vote = "You are old enough to vote";
    }
    else {
        Vote ="you are a child go away;"
    }
    document.getElementById("How_old_are_you?").innerHTML =Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}