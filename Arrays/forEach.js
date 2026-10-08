//1
const names = ["Emma", "Lesly", "Jane", "Bob"];

names.forEach(i => console.log(`Conozco a alguien llamado ${i}`));

//2
const numbers = [1, 9, 3, 8, 5, 7];

numbers.forEach(double => console.log(double * 2));

//3
const arr1 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let iPos = 0;
let iNeg = 0;
let cero = 0;

arr1.forEach(num => {
  if (num > 0) {
    iPos++
    console.log(iPos)
  } else if (num < 0) {
    iNeg++
  } else {
    cero++
  }

});

console.log(iPos)
console.log(iNeg);
console.log(cero)

//4
const array = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let posNum = 0;
let negNum = 0;
let posCount = 0;
let negCount = 0;

array.forEach(num => {
  if (num > 0) {
    posNum += num;
    posCount++
  } else if (num < 0) {
    negNum += num;
    negCount++
  }
})

let negAverage = negNum / negCount;
console.log(negAverage);
let posAverage = posNum / posCount;
console.log(posAverage)

