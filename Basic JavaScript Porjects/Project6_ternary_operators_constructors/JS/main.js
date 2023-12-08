function Ride_Function() {
    var height, Can_ride;
    height = document.getElementById("Height").ariaValueMax;
    Can_ride = (Height< 52) ? "You are too short":"You are tall enough";
    document,getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehcile_Color = Color;
}

//A constructor function new and this keywords
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("New_and_This").innerHTML = 
    " Erik drivesd a " + Erik.Vehcile_Color + "-colored " + Erik.Vehicle_Model +
    " Manufactured in " + Erik.Vehicle_Year;
}

function add_Strings() {
    var start_string="Sup";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("Homie");
    document.getElementById("Nested_Function").innerHTML = start_string;
    
}