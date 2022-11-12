let quantity = 100;

nextPrime:
for (let i = 2; i <= quantity; i++) { // por cada i...

  for (let j = 2; j < i; j++) { // buscar un divisor..
    if (i % j == 0) continue nextPrime; // no es primo, ir al próximo i
  }

  console.log( 'Es un número primo' + ' ' + i ); // primo
}