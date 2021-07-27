/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numbers) => {
  // Verifica array vazio:
  if (numbers == 0) {
    return undefined;
  }

  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (typeof numbers[index] !== 'number') {
      return undefined;
    } else {
      sum += numbers[index] / numbers.length;
    }
  }

  // Aplica arredondamento ao valor:
  let round = Math.round(sum);
  return round;
};

// console.log(average([2, 2]));
// console.log(average([1, 1]));
// console.log(average([1, '2']));
// console.log(average([]));

module.exports = average;
