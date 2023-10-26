//DOM
let grassStatics = document.querySelector('#grass')
//modules
var socket = io()

socket.on('myMatrix', MyDraw)
socket.on("statics", Stats)
//p5
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("column")
    background('#acacac');
}

function Stats(stats) {
    grassStatics.innerHTML = JSON.parse(stats).grass
    // console.log(stats["grass"]);   
}
function handleMatrix(info) {
    // console.log(info);
}
let a = 400
function MyDraw(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("#ffff00");
            }
            else if (matrix[y][x] == 3) {
                fill("#ff0000");
            }
            else if (matrix[y][x] == 4) {
                fill("#ffb400");
            }
            else if (matrix[y][x] == 5) {
                fill("#ffffff")
            }
            rect(x * a / matrix.length, y * a / matrix.length, a / matrix.length, a / matrix.length);


            // fill("blue")
            // text(x + ";" + y, x * side + side / 2, y * side + side / 2)

        }
    }
}