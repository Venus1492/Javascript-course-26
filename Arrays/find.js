const escenas = [
  {
    "id": 1,
    "titulo": "beso inicial"
  },
  {
    "id": 2,
    "titulo": "beso final"
  }
]

const escenaSeleccionada = escenas.find(escena => escena.id === 2);

console.log(escenaSeleccionada);


//////////


const users = [
  {
    "name": "Paco",
    "isActive": false,
    "age": 18
  },
  {
    "name": "Laura",
    "isActive": false,
    "age": 21
  },
  {
    "name": "Raquel",
    "isActive": false,
    "age": 15
  },
  {
    "name": "Juan",
    "isActive": true,
    "age": 17
  },
  {
    "name": "Alberto",
    "isActive": false,
    "age": 50
  },
  {
    "name": "Rodolfo",
    "isActive": true,
    "age": 7
  },
];

const chosenUser = users.find(user => user.name === "Juan"); // Modifica esta línea para resolver el ejercicio

console.log(chosenUser.age);

const chosenUser2 = users.find(user => user.name === "Alberto");

console.log(chosenUser2.age);