/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (a, b) => {
    const sum = a + b;
    return Math.floor(sum);
  },
  mult: (a, b) => {
    const sum = a * b;
    return Math.floor(sum);
  },
  div: (a, b) => {
    const sum = a / b;
    return Math.floor(sum);
  },
  sub: (a, b) => {
    const sum = a - b;
    return Math.floor(sum);
  },
};

// Casos de teste:
// console.log(calculator.add(5, 1));
// console.log(calculator.mult(5, 2));
// console.log(calculator.div(10, 2));
// console.log(calculator.sub(3, 2));

// Para fazer a função sempre retornar um valor arredondado para menos usei Math.floor()
// A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

module.exports = calculator;
