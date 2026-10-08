let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

//1
const getWomansName = () => {
  // operation
  const r = characters.filter((character) => character.gender === "female").map((character) => character.name);
  
  console.log("getWomansName(): ", r);
  console.log(r)
  return r
};

//2
const getSmallerPeople = () => {
  const updatedHeight = characters.map(character => ({
    ...character,
    height: character.height - 10
  }))
  console.log(updatedHeight)
  return updatedHeight
}
  
//3
const sumaDePeso = () => {
  const r = characters.reduce((acc, character) => acc + Number(character.mass),0)

  
} 
const queryData = async () => {
  const response = await fetch("https://swapi.py4e.com/api/people");
  const data = await response.json();
  characters = data.results;
  console.log(characters);

  // function calls
  getWomansName();
  getSmallerPeople()
};

queryData();
