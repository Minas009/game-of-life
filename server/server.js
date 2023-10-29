//modules
var fs = require('fs');
var express = require("express");
var app = express();
let random = require("./random");
var server = require('http').createServer(app); // add
var io = require('socket.io')(server); // add

app.use(express.static("../client"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () { // add
    console.log("Example is running on port 3000");
});
weather = "winter";
weatherArr = ["spring", "summer", "fall", "winter"]
i = 0
startTime = 1000
setInterval(() => {
    weather = weatherArr[i]
    i++
    if (i > weatherArr.length - 1) {
        i = 0
    }
    io.sockets.emit("weather", weather)
    if (weather == "winter") {
        startTime = 2000
    } else if (weather == "summer") {
        startTime = 500
    } else if (weather = "fall" || weather == "spring") {
        startTime = 1000
    }
}, 5000);

//matrix charectors

io.sockets.on("event", Event)

function Event(event) {
    console.log(event);
    
    if (event == true) {
        refreshGame()
        event = false
        console.log(event);
        
        io.sockets.emit("eventIsDone", event)
    }
}

let Grass = require("./grass.js")
let GrassEater = require("./grassEater.js")
let Lightning = require("./lightning.js")
let Person = require("./person.js")
let Predator = require("./predator.js")

grassArr = []
grassEaterArr = []
standartPredatorsArr = []
predatorArr = []
personArr = []
lightningArr = []
//matrix

var sides = 20;

function fillCharecter(charecter, count, side) {
    for (let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * side)
        let y = Math.floor(Math.random() * side)
        arr[y][x] = charecter
    }
}
function matrixGenerator(sides) {
    arr = []
    for (let i = 0; i < sides; i++) {
        arr.push([])
        for (let j = 0; j < sides; j++) {
            arr[i].push(0)
        }
    }
    fillCharecter(1, 80, sides)
    fillCharecter(2, 10, sides)
    fillCharecter(3, 10, sides)
    fillCharecter(4, 5, sides)
    return arr
}

function fillCharecter(charecter, count, sides) {
    for (let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * sides)
        let y = Math.floor(Math.random() * sides)
        arr[y][x] = charecter
    }
}





function createObj() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            } else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 2)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y, 3)
                standartPredatorsArr.push(predator)
            }
            else if (matrix[y][x] == 4) {
                let person = new Person(x, y, 4)
                personArr.push(person)
            }
        }
    }
}

function start() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in standartPredatorsArr) {
        standartPredatorsArr[i].eat()
    }
    for (let i in personArr) {
        personArr[i].eat()
    }
    createPerson()
    //refreshGame()
    io.sockets.emit("myMatrix", matrix)

    let statics = {
        "grass": grassArr.length,
        "grassEater": grassEaterArr.length,
        "predator": standartPredatorsArr.length,
        "person": personArr.length,
        "lightning": lightningArr.length
    }

    json = JSON.stringify(statics);

    fs.writeFileSync("statics.json", json);
    io.sockets.emit("statics", json)
    //io.sockets.emit("Weather", weather);
}

setInterval(() => {
    showLightning()
}, startTime * 3);

function showLightning() {
    let x = Math.floor(random(sides))
    let y = Math.floor(random(sides))
    if (matrix[y][x] == 0) {
        matrix[y][x] = 5
        let lightning = new Lightning(x, y, 5)
        lightning.strike()
        lightningArr.push(lightning)

    }
    if (lightningArr.length >= 2) {
        let x1 = lightningArr[0].x
        let y1 = lightningArr[0].y
        matrix[y1][x1] = 0
        lightningArr.splice(0, 1)
    }
}
function createPerson() {
    if (grassArr.length == 0) {
        let x = Math.floor(random(0, sides))
        let y = Math.floor(random(0, sides))
        let newPerson = new Person(x, y, 4);
        personArr.push(newPerson);
        matrix[y][x] = 4;

    }

}
io.sockets.emit("refreshGame", refreshGame())

function refreshGame() {
    matrix = matrixGenerator(sides)
}

refreshGame()

createObj()

io.on('connection', function (socket) {
    socket.emit("myMatrix", matrix);
});

setInterval(() => {
    start()
}, startTime);