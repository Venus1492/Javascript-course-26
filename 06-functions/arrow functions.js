//1

const cubo = num => {
  console.log(num * num * num);
}

cubo(3);

//2

const velocidad = (v) => v * 1000

console.log(velocidad(3));

//3

const rectangle = (ancho, alto) => ancho * alto;
const areaRectangle = rectangle(3, 3);
console.log(`The area of this rectangle is ${areaRectangle}`);

//4

const triangle = (base, altura) => base * altura / 2;
const areaTriangle = triangle(3, 3);
console.log(`The area of this triangle is ${areaTriangle}`);

//5

const calcPerimetro = radius => 2 * Math.PI * radius;
const perimetro = calcPerimetro(4);
console.log(`This is the perimeter of the circle: ${perimetro}`);

const calcArea = radius2 => Math.PI * radius2 * radius2;
const area2 = calcArea(2);
console.log(`This is the area: ${area2}`);