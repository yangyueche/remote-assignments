function max(numbers) {
  var max_Candidate = 0;
  for (let x = 0; x < numbers.length; x++) {

    if (numbers[x] > max_Candidate) {
      max_Candidate = numbers[x];
    }
  }
  return max_Candidate;
}
// function findPosition(numbers, target) {
//   // your code here, for-loop method preferred
// }
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
// console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
// console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
// console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); 
