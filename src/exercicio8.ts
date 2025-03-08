interface MetodoPagamento {
    pagar(valor: number): void;
}

class CartaoCredito implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado com cartão de crédito.`);
    }
}

class PayPal implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado via PayPal.`);
    }
}

class Boleto implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado com boleto.`);
    }
}

class Compra {
    constructor(public valor: number) {}

    realizarPagamento(metodo: MetodoPagamento): void {
        metodo.pagar(this.valor);
    }
}

const compra = new Compra(150.75);

const pagamentoCartao = new CartaoCredito();
const pagamentoPayPal = new PayPal();
const pagamentoBoleto = new Boleto();

compra.realizarPagamento(pagamentoCartao);
compra.realizarPagamento(pagamentoPayPal);
compra.realizarPagamento(pagamentoBoleto);