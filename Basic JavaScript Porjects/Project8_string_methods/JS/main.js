function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made it ";
    var part_3 = "this far ";
    var part_4= "in my life.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All day I cry at my desk";
    var Section = Sentence.slice(37,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.30129873769112
}