//Length method
const longitud = (string) => {
  string = "We are all Champions!";
  return string.length;
}
const myString = longitud()
console.log(myString);

//2
const devuelvePrimeraLetra = string2 => string2[0];
console.log(devuelvePrimeraLetra("Have you seen the news today?"));

//3
const devuelveUltimaLetra = string2 => string2.slice(-1);
console.log(devuelveUltimaLetra("Have you seen the news today?"));

//4
const devuelveEnesimaLetra = (string4, num) => {
  return string4.charAt(num);
}
console.log(devuelveEnesimaLetra("yes you can", 5));

//5
const devuelveMiddle = string5 => string5.substring(3, 7);
console.log(devuelveMiddle("wonderful day"));

//6
const toCase = string1 => {
  return string1.toUpperCase() + "-" + string1.toLowerCase();
}
console.log(toCase("Pablo"));

//7
const shortcut = (string1, string2) => string1[0] + string2[0];
console.log(shortcut("Amnesty", "International"));

//8
const firstChar = string1 => string1.trim()[0];
console.log(firstChar(" Rosa Parks "));

//9
const devuelveMasLarga = (string1, string2) => {
  return string1.length >= string2.length ? string1 : string2;

}
console.log(devuelveMasLarga("hello", "mavee"));

//10 remember to put comparison string on both sides of &&
const devuelveMasLarga2 = (string1, string2, string3) => {
  if (string1.length > string2.length && string1.length > string3.length) {
    return string1;
  } else if (string2.length > string1.length && string2.length > string3.length) {
    return string2;
  } else if (string3.length > string1.length && string3.length > string2.length) {
    return string3;
  } else {
    return "No hay unica cadena mas larga"
  }
};
console.log(devuelveMasLarga2("aaaaaaaaaaaa", "bbbbbbbb", "cccccccc"));

//11
const generarNombre = (string1, string2, string3) => {
  return string1.length < 5 || string2.length < 5 || string3.length < 5 ? "error" : string1[0] + string2[0] + string3[0];

};

const result = generarNombre("hola", "mymaan", "babysss");
console.log(result);

//12
const generarNombre2 = (string1, string2, string3) => {
  return string1.length < 5 || string2.length < 5 || string3.length < 5 ? "error" : string1.slice(-1) + string2.slice(-1) + string3.slice(-1);

};

const result1 = generarNombre2("holasss", "mymaan", "babysss");
console.log(result1);

//13
const generarNombre3 = (string1, string2, string3) => {
  return string1.length < 5 || string2.length < 5 || string3.length < 5 ? "error" : string1.slice(-3) + string2.slice(-3) + string3.slice(-3);

};

const result2 = generarNombre3("holasss", "mymaan", "babysss");
console.log(result2);

//14
const tieneLetra = (string1, letter) => string1.includes(letter) ? true : false;

console.log(tieneLetra("baboon", "a"));

//15
const tieneLetra1 = (string1, letter) => string1.toLowerCase().includes(letter.toLowerCase()) ? true : false;

console.log(tieneLetra1("baboon", "A"));

//16
const crearPalabra = (letter, num) => letter.repeat(num);
console.log(crearPalabra("a", 7));

//17
const crearPalabra1 = (letter, num) => letter.toUpperCase().repeat(num);
console.log(crearPalabra1("a", 7));

//18 better to use for ?
const addGuiones = string1 => {
  const ind = string1.split("");
  for (letter of ind) {
    return ind.join("-");
  }

}
console.log(addGuiones("hola guapa"));

//19

const matchIt = (word, letter) => {
  let count = 0;

  for (let match of word) {
    if (match === letter) {
      count++
    }

  }
  return count;
};

//19 for loop
const contadorDeLetras = (texto, letra) => {
  const textoMin = texto.toLowerCase();
  const objetivo = letra.toLowerCase();
  let contador = 0;

  for (let i = 0; i < textoMin.length; i++) {
    if (textoMin[i] === objetivo) {
      contador++;
    }
  }

  return contador;
};

console.log(contadorDeLetras("hello there", "e")); // 3
console.log(contadorDeLetras("Elefante", "e"));    // 3

console.log(matchIt("banana", "a"));

//20

const matchIt2 = (word, letter) => {
  word = word.toLowerCase();
  letter = letter.toLowerCase()
  let count = 0;
  let match = letter;
  for (match of word) {
    if (match === letter) {
      count++
    }

  }
  return count;
};

console.log(matchIt2("banana", "A"));

//21
/*
const contadorDeLetras2 = (text1, text2, letter) => {
  text1 = text1.toLowerCase();
  text2 = text2.toLowerCase();
  letter = letter.toLowerCase();
  let count1 = 0;
  let count2 = 0;
  let match = letter
  for (match of text1) {
    if (match === letter) {
      count1++
    }

  }
  for (match of text2) {
    if (match === letter) {
      count2++
    }

  }
  return count1 > count2 ? text1 : text2;
};

console.log(contadorDeLetras2("hello there", "its a rainyeee day", "e"));

const countLetter = (text, letter) => {
  const target = letter.toLowerCase();
  return [...text.toLowerCase()].filter((ch) => ch === target).length;
};

const contadorDeLetras2 = (text1, text2, letter) =>
  countLetter(text1, letter) > countLetter(text2, letter) ? text1 : text2;

console.log(contadorDeLetras2("hello there", "its a rainyeee day", "e"));
// "its a rainyeee day"



*/



//22
const indexOfIgnoreCase = (text1, text2) => {
  return text1.toLowerCase().indexOf(text2.toLowerCase());
}

console.log(indexOfIgnoreCase("bit", "it"));
console.log(indexOfIgnoreCase("banana", "nana"));
console.log(indexOfIgnoreCase("Yippy Yay Yay", "yay"));
console.log(indexOfIgnoreCase("Yippy Yay Yay", "Yay"));

//23
const firstWord = text => {
  return text.split(" ")[0];
}

console.log(firstWord("Where are we?"));
console.log(firstWord("What are we doing??"));