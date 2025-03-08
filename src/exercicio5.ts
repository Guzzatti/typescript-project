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

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }

    exibirDetalhes(): void {
        console.log(`Retângulo -> Largura: ${this.largura}, Altura: ${this.altura}, Área: ${this.calcularArea()}, Perímetro: ${this.calcularPerimetro()}`);
    }
}

class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }

    exibirDetalhes(): void {
        console.log(`Círculo -> Raio: ${this.raio}, Área: ${this.calcularArea().toFixed(2)}, Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
    }
}

const retangulo = new Retangulo(10, 5);
retangulo.exibirDetalhes();

const circulo = new Circulo(7);
circulo.exibirDetalhes();