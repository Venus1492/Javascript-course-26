/*function calcularVelocidad(km, hora) {
  const metros = km * 1000;
  return metros / hora;
};

console.log(calcularVelocidad(10, 2)); // 5000*/

/*function calcularVelocidad(km, hora) {
  if (hora === 0) {
    return "No se puede dividir entre cero";
  }
  const metros = km * 1000;
  return metros / hora;
}
calcularVelocidad(10, 2); // 5000*/

function calcularVelocidad(velocidad) {
  if (velocidad.hora === 0) {
    return "No se puede dividir entre cero";
  }
  const metros = velocidad.km * 1000;
  console.log(metros / velocidad.hora);

  return metros / velocidad.hora;
}
calcularVelocidad({ km: 10, hora: 2 }); // 5000