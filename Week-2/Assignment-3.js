function count(input) {
  const count = {}
  input.forEach(element => {
    count[element] = count[element] ? (count[element] + 1) : 1;
  });
  return count;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
//should print {a:3, b:1, c:2, x:1}

// var holder = {};
// function groupByKey(input) {
//   for (x = 0; x < input.length; x++) {
//     if (hodler.hasOwnProperty(input[x.name])) {
//       input[x.value] = x[d.name] + d.value;
//     } else {
//       hodler[d.name] = d.value;
//     }
//   }
// }
// let input2 = [
//   { key: 'a', value: 3 },
//   { key: 'b', value: 1 },
//   { key: 'c', value: 2 },
//   { key: 'a', value: 3 },
//   { key: 'c', value: 5 }
// ]
// console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}

