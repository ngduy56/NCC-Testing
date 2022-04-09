// const add = (a = 10, b = 5) => a + b; 
// console.log(add(5, 4))
// console.log(add(3))
// console.log(add(null, 9))
// console.log(add(undefined, 9))
// console.log(add())

// add(5, 4);
// add(3);
// add(null, 9);
// add(undefined, 9);
// add();
const arr = ['one', 'two', 'three', 'four', 'five'];
var groupBy = function(arr, key) {
  return arr.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

console.log(groupBy(arr, 'length'));