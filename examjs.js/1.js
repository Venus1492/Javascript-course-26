//1
const a = 5;
const b = 5;

console.log(`El valor de a es ${a}`);
console.log(`El valor de b es ${b}`);

//2

if (a > b) {
  console.log(`a es mayor que b`)
} else if (b > a) {
  console.log(`b es mayor que a`)
} else {
  console.log(`son iguales`)
}

//functions
const producto = (a, b) => a * b;
const divisible = (a, b) => {
  if (b % a === 0) {
    return `divisible`
  } else {
    return `no divisible`
  }
}


const elevar = (num1, num2) => {
  for (let i = 0; i < num1; i++) {
    i++
    return num1 ** num2;
  }
}

//function calls
if (a > b) {
  console.log(producto(a, b))
} else if (b > a) {
  console.log(divisible(a, b))
} else {
  console.log(elevar(a, b))
}