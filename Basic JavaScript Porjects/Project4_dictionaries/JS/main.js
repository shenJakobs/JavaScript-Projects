function my_Dictionary() {
    var Animal= {
        Species:"Dog",
        Color:"Black",
        Breed:"Doberman",
        Age:"8",
        Sound:"Bark!"
    };
    delete Animal.Age; //removes the AGE kvp 
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}