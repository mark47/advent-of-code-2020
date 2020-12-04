const fs = require('fs');
const theForest = fs.readFileSync('input.txt', { encoding:'utf8' }).split("\n");
const forestLength = theForest.length;

function hitTheSlope(goRight,goDown) {
  var ouchies = 0;
  var posX = 0;
  for (var i = 0; i < forestLength; i += goDown) {
    var lineLength = theForest[i].length;
    if (theForest[i].charAt(posX) == "#") {
      ouchies++;
    }
    posX = (posX + goRight) % lineLength;
  }
  return ouchies;
}

var theProduct =
  hitTheSlope(1,1)
  *
  hitTheSlope(3,1)
  *
  hitTheSlope(5,1)
  *
  hitTheSlope(7,1)
  *
  hitTheSlope(1,2);

console.log(theProduct);
