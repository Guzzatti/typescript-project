interface Relatorio {
    gerar(dados: string[]): void;
}

class PdfRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em PDF com os dados: ${JSON.stringify(dados)}`);
    }
}

class ExcelRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em Excel com os dados: ${JSON.stringify(dados)}`);
    }
}

class HtmlRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em HTML com os dados: ${JSON.stringify(dados)}`);
    }
}

class Gerente {
    solicitarRelatorio(relatorio: Relatorio, dados: string[]): void {
        relatorio.gerar(dados);
    }
}

const gerente = new Gerente();
const dadosRelatorio = ["Venda 1", "Venda 2", "Venda 3"];

gerente.solicitarRelatorio(new PdfRelatorio(), dadosRelatorio);
gerente.solicitarRelatorio(new ExcelRelatorio(), dadosRelatorio);
gerente.solicitarRelatorio(new HtmlRelatorio(), dadosRelatorio);