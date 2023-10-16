var socket = io()

function setup() {
    frameRate(1);
    let canvas = createCanvas(matrix[0].length * side, matrix.length * side);
    console.log(canvas);
    canvas.parent("column")
    background('#acacac');
}

socket.on('myMatrix', handleMatrix)

function handleMatrix(info){
    console.log(info);
}