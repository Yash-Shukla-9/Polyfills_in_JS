let arr = [1, 2, 3, 4, 5];

Array.prototype.myFillter = function (callback) {
  let newReturnArray = [];

  for (let i = 0; i < this.length; i++) {
    if (isEven(this[i])) {
      newReturnArray.push(callback(this[i]));
    }
  }

  return newReturnArray;
};

function isEven(val) {
  if (val % 2 === 0) {
    return val;
  }
}
let result = arr.myFillter(isEven);
console.log(result);
