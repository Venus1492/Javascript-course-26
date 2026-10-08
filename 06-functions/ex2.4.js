
// 2.4
/*
function echo(input) {
  return input;
};
console.log(echo("Greta"));
console.log(echo("CO2"));

//2.5
function saludar(nombre) {
  return `Hola ${nombre}!`;
};
console.log(saludar("Ada"));
console.log(saludar("Grace"));
const greeting = saludar(nombre = "Alan");
console.log(greeting);

//2.6
function test(val) {
  if (val <= 20 && val >= 10) { // Cambia esta línea
    return "Inside";
  } else {
    return "Outside";
  }
};
const result = test(15);
console.log(result);
//2.7
function testEqual(val) {
  if (val === 12) { // Cambia esta línea
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));
const result = testEqual(10);
console.log(result);
*/

//2.8
function testElse(val) {
  let result = "";
  if (val <= 5) {
    result = "Menor o igual a 5";
  } else {
    result = "Mayor que 5";
  }
  return result;
}

console.log(testElse(23));

//2.9
function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else if (val < 5) {
    result = "Smaller than 5";
  } else if (val == 5) {
    result = "Equal to 5";
  }
  return result;

}
/*
//2.10
function hola(nombre) {
  return "Hi " + nombre + "!";
}

const h1 = hola("Selva");
const h2 = hola("Pola");
const x = h1 + " " + h2;
console.log(x); // ¿Qué valor de x se mostrará en la consola?*/

//2.11
function duplica(nombre) {
  return nombre + " and " + nombre;
}

const x = duplica("Roy");
console.log(x); // ¿Qué valor de x se mostrará en la consola?

//2.12
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
    return "Huge"
  }

}
console.log(testSize(56));
//13
function nand(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return false;
  } else {
    return true;
  }
};
console.log(nand(true, false));
console.log(nand(true, true));
console.log(nand(false, false));

//14
function nor(boolean1, boolean2) {
  return !(boolean1 && boolean2)
};
console.log(nor(true, false));
console.log(nor(true, true));
console.log(nor(false, false));
console.log(nor(false, true));
//15
function xor(boolean1, boolean2) {
  return boolean1 !== boolean2;
};
console.log(xor(true, false));
console.log(xor(true, true));
console.log(xor(false, false));