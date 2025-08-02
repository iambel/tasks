class Conta {
  constructor() {
    this.saldo = 0;
  }

  consultaSaldo() {
    return this.saldo;
  }

  depositar(valor) {
    if (valor <= 0) {
      throw new Error("valor deve ser maior que zero");
    }

    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= 0) {
      throw new Error("valor deve ser maior que zero");
    }
    if (valor > this.saldo) {
      throw new Error("saldo iinsuficiente");
    }

    this.saldo -= valor;
  }
}

module.exports = Conta;
