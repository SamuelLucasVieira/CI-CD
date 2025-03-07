const sum = require('./sum'); // Importa a função sum.js

test('Deve somar 1 + 2 e retornar 3', () => {
  expect(sum(1, 2)).toBe(3); // Verifica se retorna o valor correto
});
