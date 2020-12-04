const fs = require('fs');
const theForest = fs.readFileSync('input.txt', { encoding:'utf8' }).split("\n");
const forestLength = theForest.length;

var ouchies = 0;
var posX = 0;
for (var i = 0; i < forestLength; i++) {
  var lineLength = theForest[i].length;
  posX = (posX + 3) % lineLength;
  if (theForest[i].charAt(posX-1) == "#") {
    ouchies++;
  }
  console.log(theForest[i]);
  console.log(theForest[i].substring(0,posX));
  console.log(theForest[i].charAt(posX-1));
  console.log(ouchies);
}
console.log(ouchies);
