const isPrime = (number) => {
  // Casos especiales
  if (number == 0 || number == 1 || number == 4) return false;
  for (let x = 2; x < number / 2; x++) {
    if (number % x == 0) return false;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return true;
};

const numerosParaProbar = [1, 2, 50, 51, 3, 500, 7, 1311];

numerosParaProbar.forEach((number) => {
  console.log("¿%d es primo? %s", number, esPrimo(number));
});
