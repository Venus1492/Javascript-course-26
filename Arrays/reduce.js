const numbers = [1, 1, 1];

const total = numbers.reduce((accumulator, current, i) => {
  if (i === numbers.length - 1) {
    return "Monica, no seas mala"
  }
  return accumulator + current;
}, 0); // <-- 0 is our starting snowball

console.log(total);


