// module.exports = class Lightning {
//   constructor(x, y, index) {
//     this.x = x;
//     this.y = y;
//     this.index = index;
//     this.directions = [
//       [this.x - 1, this.y - 1],
//       [this.x, this.y - 1],
//       [this.x + 1, this.y - 1],
//       [this.x - 1, this.y],
//       [this.x + 1, this.y],
//       [this.x - 1, this.y + 1],
//       [this.x, this.y + 1],
//       [this.x + 1, this.y + 1]
//     ];
//   }
//   strike() {
//     for (let i in this.directions) {
//       var x = this.directions[i][0];
//       var y = this.directions[i][1];
//       if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//         matrix[y][x] = 0
//       }
//       for (let j in grassArr) {
//         if (this.directions[i][0] == grassArr[j].x && this.directions[i][1] == grassArr[j].y) {
//           grassArr.splice(j, 1)
//         }
//       }
//       for (let l in grassEaterArr) {
//         if (this.directions[i][0] == grassEaterArr[l].x && this.directions[i][1] == grassEaterArr[l].y) {
//           grassEaterArr.splice(l, 1)
//         }
//       }
//       for (let k in predatorArr) {
//         if (this.directions[i][0] == predatorArr[k].x && this.directions[i][1] == predatorArr[k].y) {
//           predatorArr.splice(k, 1)
//         }
//       }
//     }
//   }

// }



let BaseClass = require("./BaseClass.js")

module.exports = class Lightning extends BaseClass {
  strike() {
    for (let i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        matrix[y][x] = 0
      }
      for (let j in grassArr) {
        if (this.directions[i][0] == grassArr[j].x && this.directions[i][1] == grassArr[j].y) {
          grassArr.splice(j, 1)
        }
      }
      for (let l in grassEaterArr) {
        if (this.directions[i][0] == grassEaterArr[l].x && this.directions[i][1] == grassEaterArr[l].y) {
          grassEaterArr.splice(l, 1)
        }
      }
      for (let k in predatorArr) {
        if (this.directions[i][0] == predatorArr[k].x && this.directions[i][1] == predatorArr[k].y) {
          predatorArr.splice(k, 1)
        }
      }
    }
  }

}