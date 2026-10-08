
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FIZZBUZZ');
    continue;
  }
  if (i % 3 == 0) {
    console.log('FIZZ');
    continue;
  }
  if (i % 5 == 0) {
    console.log('BUZZ');
    continue;
  }

  else
    console.log(i);

}
