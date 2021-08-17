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


function groupByKey(input) {
  const holder = {}
  input.forEach(element => {
    holder[element.key] = holder[element.key] ? (holder[element.key] + element.value) : element.value;
  });
  return holder;
}
let input2 = [
  { key: 'a', value: 3 },
  { key: 'b', value: 1 },
  { key: 'c', value: 2 },
  { key: 'a', value: 3 },
  { key: 'c', value: 5 }
]
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}
