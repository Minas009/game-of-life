// let Grass = require("./grass.js")
// let GrassEater = require("./grassEater.js")
// let Lightning = require("./lightning.js")
// let Person = require("./person.js")
// let Predator = require("./predator.js")

// var sides = 20;
// var matrix 
// function fillCharecter(charecter, count, side) {
//     for (let i = 0; i < count; i++) {
//         let x = Math.floor(Math.random() * side)
//         let y = Math.floor(Math.random() * side)
//         arr[y][x] = charecter
//     }
// }

// function matrixGenerator(sides) {
//     arr = []
//     for (let i = 0; i < sides; i++) {
//         arr.push([])
//         for (let j = 0; j < sides; j++) {
//             arr[i].push(0)
//         }
//     }
//     fillCharecter(1, 20, sides)
//     fillCharecter(2, 10, sides)
//     fillCharecter(3, 50, sides)
//     return arr
// }
// function fillCharecter(charecter, count, sides) {
//     for (let i = 0; i < count; i++) {
//         let x = Math.floor(Math.random() * sides)
//         let y = Math.floor(Math.random() * sides)
//         arr[y][x] = charecter
//     }
// }

// matrix = matrixGenerator(sides)

var side = 30;

// let grassArr = []
// let grassEaterArr = []
// let standartPredatorsArr = []
// let predatorArr = []
// let personArr = []
// let lightningArr = []
// function setup() {
//     frameRate(1);
//     let canvas = createCanvas(matrix[0].length * side, matrix.length * side);
//     console.log(canvas);
//     canvas.parent("column")
//     background('#acacac');
    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {
    //         if (matrix[y][x] == 1) {
    //             let grass = new Grass(x, y, 1)
    //             grassArr.push(grass)
    //         } else if (matrix[y][x] == 2) {
    //             let grassEater = new GrassEater(x, y, 2)
    //             grassEaterArr.push(grassEater)
    //         }
    //         else if (matrix[y][x] == 3) {
    //             let predator = new Predator(x, y, 3)
    //             standartPredatorsArr.push(predator)
    //         }
    //         else if (matrix[y][x] == 4) {
    //             let person = new Person(x, y, 4)
    //             personArr.push(person)
    //         }
    //     }
    // }

// function showLightning(){
//     let x = Math.floor(random(0, sides))
//     let y = Math.floor(random(0, sides))
//     if (matrix[y][x] == 0) {
//         matrix[y][x] = 5
//         let lightning = new Lightning(3, 1, 5)
//         lightning.strike()
//         lightningArr.push(lightning)
        
//     }
//     if(lightningArr.length >= 2){
//         let x1 = lightningArr[0].x
//         let y1 = lightningArr[0].y
//         matrix[y1][x1] = 0
//         lightningArr.splice(0, 1)
//     }
// }
    
    //  setInterval(showLightning, 10000)
}

// function draw() {

//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("#ffff00");
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("#ff0000");
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("#ffb400");
//             }
//             else if (matrix[y][x] == 5) {
//                 fill("#ffffff")
//             }
//             rect(x * side, y * side, side, side);


            // fill("blue")
            // text(x + ";" + y, x * side + side / 2, y * side + side / 2)

        }
    }
    // for (let i in grassArr) {
    //     grassArr[i].mul()
    // }
    // for (let i in grassEaterArr) {
    //     grassEaterArr[i].eat()
    // } 
    // for (let i in standartPredatorsArr) {
    //     standartPredatorsArr[i].eat()
    // }
    // for (let i in personArr) {
    //     personArr[i].eat()
    // }
    // createPerson()
    // refreshGame()

}

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// function createPerson() {
//     if (grassArr.length == 0) {
//         let x = Math.floor(random(0, sides))
//         let y = Math.floor(random(0, sides))
//         let newPerson = new Person(x, y, 4);
//         personArr.push(newPerson);
//         matrix[y][x] = 4;

//     }

// }
// function refreshGame() {
//     if (grassEaterArr.length < 2 && predatorArr.length < 2) {
//         let x1 = Math.floor(random(0, sides))
//         let y1 = Math.floor(random(0, sides))
//         let x2 = Math.floor(random(0, sides))
//         let y2 = Math.floor(random(0, sides))

//         if (x1 != x2 && y1 != y2) {
//             let grassEater = new GrassEater(x1, y1, 2);
//             grassEaterArr.push(grassEater);
//             matrix[y1][x1] = 2;
//             let predator = new Predator(x2, y2, 3);
//             predatorArr.push(predator);
//             matrix[y2][x2] = 3;
//         }
//     }
// }
