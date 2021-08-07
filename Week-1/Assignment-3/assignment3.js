
function countAandB(arr) {
  var z = 0, r = 0;
  for (x = 0; x < arr.length; x++) {

    if (arr[x] == "a") {
      z += 1;
    } else if (arr[x] == "b") {
      r += 1;
    }
  }
  return z + r;
}

function toNumber(arr) {
  var converted = new Array();
  for (x = 0; x < arr.length; x++) {
    if (arr[x] == "a") {
      converted.push('1');
    } else if (arr[x] == "b") {
      converted.push('2');
    } else if (arr[x] == "c") {
      converted.push('3');
    } else if (arr[x] == "d") {
      converted.push('4');
    } else if (arr[x] == "e") {
      converted.push('5');
    }
  }
  return converted;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter) 
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0 
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
// console.log(input1[1]);