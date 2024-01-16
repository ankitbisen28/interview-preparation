// map, filter and reduce

// What is Map ?

const nums = [1, 2, 3, 4, 5];

const multiplyThree = nums.map((num, i, arr) => {
  return num * 3;
});
// console.log("Multiply by three : ", multiplyThree);

// What is filter

const moreThanTwoArr = nums.filter((num, i, arr) => {
  return num > 2;
});
// console.log("More Than 2 array :", moreThanTwoArr);

// what is Reduce

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
});
// console.log("sum of array element :", sum);

// Pollyfill for map()
// Array.map((num, i, arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const newMapArr = nums.myMap((num) => {
  return num * 3;
});

// console.log(newMapArr);

// Pollyfill for filter()

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const newFilterArr = nums.myFilter((num) => {
  return num > 2;
});

console.log(newFilterArr);

// Pollyfill for filter()
// Array.reduce((acc, curr, i, arr)=>{}, initialValue)

Array.prototype.myReduce = function (cb, intialValue) {
  var accumulator = intialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const newReduceArr = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});

console.log(newReduceArr);
