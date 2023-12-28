let myArray = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (callback) {
  let newReturnArray = [];

  for (let i = 0; i < this.length; i++) {
    newReturnArray.push(callback(this[i]));
  }
  return newReturnArray;
};

function callback(val) {
  return val * val;
}
let result = myArray.myMap(callback);
console.log(result);
