function sum(a, b) {
    return a + b;
  }
  
  test('soma 1 + 2 e retorna 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  