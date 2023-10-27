//DOM
let grassStatics = document.querySelector('#grass')
let grassEaterStatics = document.querySelector('#grassEater')
let predatorStatics = document.querySelector('#predator')
let personStatics = document.querySelector('#person')
let lightningStatics = document.querySelector('#lightning')
//modules
var socket = io()
//from server
socket.on('myMatrix', MyDraw)
socket.on("statics", Stats)
socket.on("refreshgame", RefreshGame)
//p5
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("column")
    background('#acacac');
}
function RefreshGame(){
    return refreshGame()
}


function Stats(stats) {
    grassStatics.innerHTML = JSON.parse(stats).grass
    grassEaterStatics.innerHTML = JSON.parse(stats).grassEater
    predatorStatics.innerHTML = JSON.parse(stats).predator
    personStatics.innerHTML = JSON.parse(stats).person
    lightningStatics.innerHTML = JSON.parse(stats).lightning
    // console.log(stats["grass"]);   
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