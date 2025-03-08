class Tarefa {
    descricao: string;
    concluida: boolean;

    constructor(descricao: string) {
        this.descricao = descricao;
        this.concluida = false;
    }

    marcarComoConcluida(): void {
        this.concluida = true;
    }

    exibirDetalhes(): void {
        console.log(`Tarefa: ${this.descricao} - Status: ${this.concluida ? "Concluída" : "Pendente"}`);
    }
}

class GerenciadorTarefas {
    tarefas: Tarefa[];

    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao: string): void {
        const novaTarefa = new Tarefa(descricao);
        this.tarefas.push(novaTarefa);
    }

    marcarTarefaComoConcluida(indice: number): void {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas[indice].marcarComoConcluida();
        } else {
            console.log("Índice inválido.");
        }
    }

    exibirTarefas(): void {
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index}:`);
            tarefa.exibirDetalhes();
        });
    }
}

// Testando o sistema
const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa("Comprar pão");
gerenciador.adicionarTarefa("Estudar TypeScript");
gerenciador.adicionarTarefa("Fazer exercícios");

gerenciador.exibirTarefas();

gerenciador.marcarTarefaComoConcluida(1);

gerenciador.exibirTarefas();
