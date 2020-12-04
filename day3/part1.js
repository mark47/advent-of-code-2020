const fs = require('fs');
const theForest = fs.readFileSync('input.txt', { encoding:'utf8' }).split("\n");
const forestLength = theForest.length;

var ouchies = 0;
var posX = 0;
for (var i = 0; i < forestLength; i++) {
  var lineLength = theForest[i].length;
  if (theForest[i].charAt(posX) == "#") {
    ouchies++;
  }
  posX = (posX + 3) % lineLength;
}
console.log(ouchies);
