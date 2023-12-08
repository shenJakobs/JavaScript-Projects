//variable to keep track of whose turn it is
let activePlayer = 'X';

//Array to store moves - using this to determeine win conditons 
let selectedSquares = [];

//function to place x or o in a sqaure 
function placeXOrO(squareNumber) {
    //checks if sqaure has been selected already
    if (!selectedSqaures.some(element => element.includes(squareNumber))) {
        //variable to hold the html element that was clicked
        let select = document.getElementById(squareNumber);
        //determines the active player and places the icon
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("Images/o.png")';
        }
        //adds the sqaure number andf player to the array
        selectedSquares.push(squareNumber = activePlayer);
        //calls the function to check for the win
        checkWinConditions();
        //changhes the active player
        if (activePlayer === 'X') {
            activePlayer = "O";
        } else {
            activePlayer = 'X';
        }
        //Function to play the placemnet sound 
        Audio('./media/place.mp3');
        //checks if it is the computers turn 
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for the computerturn funtion
        return true;
    }
    //Picks a random sqaure for the computers turn
   function computersTurn() {
    let success= false;
    let pickASquare;
    while (!sucess) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if(placeXOrO(pickASquare)) {
            placeXOrO(pickASquare);
            sucess = true;
        }
    }
}
}

//tyhis function parses the selectedSquares array to determine if a platyer has won
//the drawluine funtion is called is a win conditon is met 
function checkWinConditions () {
    if (arrayIncludes('OX', '1X', '2X')) { drawLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(50, 304 , 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) {drawinLine(50, 508 , 558, 508)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(100, 50, 100, 558)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(304, 50, 304, 558)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(508, 50, 508, 558)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(100, 508, 510, 90)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(100, 100, 520, 520)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(50, 304, 558, 304)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(50, 508, 558, 508)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(100, 50, 100, 558)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(50, 304 , 558, 304)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(100, 50, 100, 558)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(304, 50, 304, 558)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(508, 50, 508, 558)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(100, 508, 510, 90)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawinLine(100, 100, 520, 520)}
    //checks for s tie - if no win conditons are met and 9 squares have been selected
    else if (selectedSquares.lengthlength >=9) {
        //plays tie sound
        Audio('.Media/tie/mp3');
        //resets the game after a tie
        setTimeout(function () {resetGame(); }, 500);
    }
}

//this function checks for each win condition
function arrayIncludes(squareA, squareB, squareC) {
    const a = selected.Squares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && cc === true) {return true; }
}

//clears the baord and the array to be restart the game 
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgrobdImage = '';
    }
    selectedSquares = [];
}

//plays audio files 
function audio(audioURL) {
    let audio = new Audio(audioURL);
    Audio.play();
}

//function to draw the line across the winning coordiantes 
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
}
function animateLineDrawing() {
    const animatIONLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255 33, .08)';
    c.stroke();
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) {x += 10; }
        if ( y < y2) { y += 10; }
        if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
    }
    if ( x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10;} 
        if (y > y2) {y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }

    // clears the board after animation
    function clear () {
        const animationLoop = requestAnimatonFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick() ;
    audio('./Media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//disables click during the computers turn 
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000);
}