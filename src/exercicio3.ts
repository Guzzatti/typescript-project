class Conta {
    numero: number;
    saldo: number;

    constructor(numero: number, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    criarConta(numero: number, saldoInicial: number): void {
        contas.push({ numero, saldo: saldoInicial });
        console.log(`Conta ${numero} criada com saldo inicial de R$${saldoInicial}.`);
    }

    depositar(numeroConta: number, valor: number): void {
        const conta = contas.find(c => c.numero === numeroConta);
        if (conta) {
            conta.saldo += valor;
            console.log(`Depósito de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.saldo}.`);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    sacar(numeroConta: number, valor: number): void {
        const conta = contas.find(c => c.numero === numeroConta);
        if (conta) {
            if (conta.saldo >= valor) {
                conta.saldo -= valor;
                console.log(`Saque de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.saldo}.`);
            } else {
                console.log("Saldo insuficiente.");
            }
        } else {
            console.log("Conta não encontrada.");
        }
    }

    consultarSaldo(numeroConta: number): void {
        const conta = contas.find(c => c.numero === numeroConta);
        if (conta) {
            console.log(`Saldo da conta ${numeroConta}: R$${conta.saldo}.`);
        } else {
            console.log("Conta não encontrada.");
        }
    }
}

let contas: Conta[] = [];


const conta = new Conta(0, 0);
conta.criarConta(1, 100);
conta.depositar(1, 50);
conta.sacar(1, 30);
conta.consultarSaldo(1);