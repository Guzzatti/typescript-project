class Tarefa(descricao: string, concluida: boolean = false) {
    constructor(public descricao: string, public concluida: boolean ) {

        marcarConcluida(): void {
            this.concluida = true;
        }

        detalhes(): string {
            return `${this.concluida ? "[X]" : "[ ]"} ${this.descricao}`;
        }
    }
}

class GerenciadorTarefas() {
    private tarefas: Tarefa[] = [];

    adicionarTarefa(descricao: string): void {
        const tarefa = new Tarefa(descricao);
        this.tarefas.push(tarefa);
    }

    listarTarefas(): void {
        this.tarefas.forEach(tarefa => {
            console.log(tarefa.detalhes());
        });
    }

    marcarConcluida(indice: number): void {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas[indice].marcarConcluida();
        }
    }
}

const