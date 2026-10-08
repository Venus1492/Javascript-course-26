// splice can be used to swap elements in array

const originalArray = [1, 2, 3, 4, 5];
let copyArray = originalArray.slice();
copyArray[4] = copyArray.splice(0, 1, copyArray[4])[0];
console.log(copyArray)