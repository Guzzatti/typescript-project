class Produto {
    constructor(
      public nome: string,
      public preco: number,
      public quantidadeEmEstoque: number
    ) {}
  
    atualizarPreco(novoPreco: number): void {
      if (novoPreco > 0) {
        this.preco = novoPreco;
      } else {
        console.log("O preço deve ser maior que zero.");
      }
    }
  
    adicionarEstoque(quantidade: number): void {
      if (quantidade > 0) {
        this.quantidadeEmEstoque += quantidade;
      } else {
        console.log("A quantidade a ser adicionada deve ser maior que zero.");
      }
    }
  
    removerEstoque(quantidade: number): void {
      if (quantidade > 0 && this.quantidadeEmEstoque >= quantidade) {
        this.quantidadeEmEstoque -= quantidade;
      } else {
        console.log("Quantidade inválida para remoção.");
      }
    }
  
    exibirDetalhes(): void {
      console.log(
        `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Quantidade em Estoque: ${this.quantidadeEmEstoque}`
      );
    }
  }
  
  class CadastroProdutos {
    private produtos: Produto[] = [];
  
    adicionarProduto(produto: Produto): void {
      this.produtos.push(produto);
    }
  
    atualizarPreco(nome: string, novoPreco: number): void {
      const produto = this.produtos.find((p) => p.nome === nome);
      if (produto) {
        produto.atualizarPreco(novoPreco);
      } else {
        console.log("Produto não encontrado.");
      }
    }
  
    exibirRelatorio(): void {
      console.log("\nRelatório de Produtos Cadastrados:");
      this.produtos.forEach((produto) => produto.exibirDetalhes());
    }
  }
  
  const cadastro = new CadastroProdutos();
  
  const produto1 = new Produto("Notebook", 3500, 10);
  const produto2 = new Produto("Smartphone", 2000, 20);
  const produto3 = new Produto("Fone de Ouvido", 150, 50);
  
  cadastro.adicionarProduto(produto1);
  cadastro.adicionarProduto(produto2);
  cadastro.adicionarProduto(produto3);
  
  cadastro.atualizarPreco("Smartphone", 2200);
  produto1.adicionarEstoque(5);
  produto3.removerEstoque(10);
  
  cadastro.exibirRelatorio();
  