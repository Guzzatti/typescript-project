class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }

    exibirArea(): void {
        const area = this.calcularArea();
        console.log(`A área do retângulo é: ${area}`);
    }
}

const retangulo = new Retangulo(10, 20);

retangulo.exibirArea(); // A área do retângulo é: 200