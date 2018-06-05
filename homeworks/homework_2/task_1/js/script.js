let squareSide = prompt("Enter square side: ");

const squareSquare = (squareSide) => {
    return Math.pow(squareSide, 2);
};

if (squareSide && parseFloat(squareSide)) {
    console.log(`Square of a square with side ${squareSide} is: ${squareSquare(squareSide)}`);
} else {
    console.log("Dumb bastard!!!")
}