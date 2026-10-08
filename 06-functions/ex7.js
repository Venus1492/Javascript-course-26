function calculaPerimetro(radio) {
  return 2 * Math.PI * radio;
};

console.log(calculaPerimetro(4));

function calculaArea(radio) {
  const area = Math.PI * Math.pow(radio, 2);
  //console.log(area);
  return area;
}
console.log(calculaArea(4));

let myarea = calculaArea(5);
console.log(myarea);