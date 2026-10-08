//1
const names = ["Bob", "Jane", "Emma", "Mary"];

for (meet of names) {
  console.log("Conozco a alguien llamado " + meet);
}

//2
/*
const myArray = []
const toArray = (value1, value2) => {
  return myArray.concat(value1, value2);
}
console.log(toArray(9, 4));
*/
const toArray = (v1, v2) => [v1, v2];
console.log(toArray(1, 2));


//3
const numbers = [1, 9, 3, 8, 5, 7];

for (double of numbers) {
  console.log(double * 2);
};

//4

const getFirstElement = myArray2 => {
  return myArray2[0];
}
console.log(getFirstElement([1, 2]));

//5 splice has to be done first before return.
const setFirstElement = (myArray, value) => {
  myArray.splice(0, 1, value);
  return myArray
}
console.log(setFirstElement([1, 2, 3], 4));

//6
const getLastElement = myArray => {
  let popped = myArray.pop()
  return popped
}
console.log(getLastElement([1, 2, 3, 4, 5]));

//7


const countNumbers = arr => {

  let negNum = 0;
  let posNum = 0;
  let zeroCount = 0

  for (num of arr) {

    if (num < 0) {
      negNum++
      console.log(negNum)
    } else if (num > 0) {
      posNum++;
      console.log(posNum)
    } else {
      zeroCount++;
      console.log(zeroCount)
    }

  }
  return {
    negatives: negNum,
    positives: posNum,
    zeros: zeroCount
  };
}

const theArray = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

console.log(countNumbers(theArray))


//8 We need two variables for each math process. 
let arr = [
  -1, -1, -1, -2, -2, 1, 2, 3, 4, 5
];

//place to store sum as it loops
sumNegatives = 0;
sumPositives = 0;
//counter(i)
countNegatives = 0;
countPositives = 0;

for (let num of arr) {
  if (num < 0) {
    //add looped number to total
    sumNegatives += num;
    //increment at each index to get number of numbers in array
    countNegatives++;
  } else {
    sumPositives += num;
    countPositives++;
  }
};
//getAverage by dividing total by number of negatives
const avgNegatives = sumNegatives / countNegatives;
console.log(avgNegatives);
const avgPositives = sumPositives / countPositives;
console.log(avgPositives);





//9
//Access a specific number of an array within arrays
const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const myData = arr1[2][1]; // Modificar únicamente esta línea para acceder al 8 del array bidimensional
console.log(myData);



