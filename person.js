// class Person {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 8;
//         this.index = index;
//         this.directions = [];
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

//     chooseCell(character) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     die() {
//         matrix[this.y][this.x] = 0
//         for (let i in personArr) {
//             if (this.x == personArr[i].x && this.y == personArr[i].y) {
//                 personArr.splice(i, 1)
//                 break
//             }
//         }
//     }
//     move() {
//         let newCells = this.chooseCell(0)
//         let newCell = random(newCells)
//         if (newCell) {
//             this.energy--
//             matrix[this.y][this.x] = 0
//             let newX = newCell[0]
//             let newY = newCell[1]
//             matrix[newY][newX] = 4
//             this.x = newX
//             this.y = newY
//             if (this.energy == 0) {
//                 this.die()
//             }
//         }
//     }

//     mul() {
//         var newCell = random(this.chooseCell(0));//[5,4]
//         if (newCell) {
//             var newPerson = new Person(newCell[0], newCell[1], this.index);
//             personArr.push(newPerson);
//             matrix[newCell[1]][newCell[0]] = 4;
//             this.energy = 8
//         }
//     }

//     eat() {
//         let foods2 = this.chooseCell(2)
//         let foods3 = this.chooseCell(3)
//         let foods = foods2.concat(foods3)
//         let food = random(foods)

        
//         if (food) {
//             this.energy++;
//             matrix[this.y][this.x] = 0
//             let newX = food[0]
//             let newY = food[1]
//             matrix[newY][newX] = 4
//             this.x = newX
//             this.y = newY
//             for (var i in grassArr) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }
//             }
//             for (var i in grassEaterArr) {
//                 if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
//                     grassEaterArr.splice(i, 1);
//                     break;
//                 }
//             }
//             if (this.energy >= 20) {
//                 this.mul()
//             }
//         }
//         else {

//             this.move()
//                 if( this.energy > 4){
//                 var newCell = random(this.chooseCell(0));//[5,4]
//                 if (newCell) {
//                     var newGrass = new Grass(newCell[0], newCell[1], 1);
//                     grassArr.push(newGrass);
//                     matrix[newCell[1]][newCell[0]] = 1;
//                 this.energy -=4
//                 }
//             }
//         }
//     }


// }

class Person extends BaseClass{
    constructor(x, y, index){
        super(x, y, index)
        this.energy = 8
    }
    getNewCoordinates(){
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
 
    die() {
        matrix[this.y][this.x] = 0
        for (let i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1)
                break
            }
        }
    }
    move() {
        let newCells = this.chooseCell(0)
        let newCell = random(newCells)
        if (newCell) {
            this.energy--
            matrix[this.y][this.x] = 0
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            if (this.energy == 0) {
                this.die()
            }
        }
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            grassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 4;
            this.energy = 8
            this.multipy++
        }
    }
    eat() {
        let foods2 = this.chooseCell(2)
        let foods3 = this.chooseCell(3)
        let foods = foods2.concat(foods3)
        let food = random(foods)

        
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 20) {
                this.mul()
            }
        }
        else {

            this.move()
                if( this.energy > 4){
                var newCell = random(this.chooseCell(0));//[5,4]
                if (newCell) {
                    var newGrass = new Grass(newCell[0], newCell[1], 1);
                    grassArr.push(newGrass);
                    matrix[newCell[1]][newCell[0]] = 1;
                this.energy -=4
                }
            }
        }
    }
}