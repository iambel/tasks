const Conta = require("./Conta");

describe("testes da classe Conta", () => {
  let conta;

  beforeEach(() => {
    conta = new Conta();
  });

  test("saldo inicial = 0: ", () => {
    expect(conta.consultaSaldo()).toBe(0);
  });

  test("depositar 100, saldo = 100: ", () => {
    conta.depositar(100);
    expect(conta.consultaSaldo()).toBe(100);
  });

  // depositar um valor inválido
  // sacar um valor inválido

  test("mensagem valor inválido: ", () => {
    expect(() => conta.depositar(-1)).toThrow("valor deve ser maior que zero");

    expect(() => conta.sacar(-1)).toThrow("valor deve ser maior que zero");
  });
});
