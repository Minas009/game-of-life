var socket = io()

function setup() {
    let canvas = createCanvas(400,400);
    canvas.parent("column")
    background('#acacac');
}

socket.on('myMatrix', MyDraw)

function handleMatrix(info){
   // console.log(info);
}
let size = 400
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
            rect(x * size/matrix.length, y * size/matrix.length, size/matrix.length, size/matrix.length);


            // fill("blue")
            // text(x + ";" + y, x * side + side / 2, y * side + side / 2)

        }
    }
}