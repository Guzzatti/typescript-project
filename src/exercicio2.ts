let tarefas: string[] = [];

interface ListaDeTarefas {
    adicionarTarefa(tarefa: string): void;
    listarTarefas(): void;
    removerTarefa(index: number): void;
}

class ListaDeTarefasImpl implements ListaDeTarefas {
    private tarefas: string[] = [];

    adicionarTarefa(tarefa: string): void {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada.`);
    }

    listarTarefas(): void {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }

    removerTarefa(index: number): void {
        if (index >= 0 && index < this.tarefas.length) {
            const tarefaRemovida = this.tarefas.splice(index, 1)[0];
            console.log(`Tarefa "${tarefaRemovida}" removida.`);
        } else {
            console.log("Índice inválido.");
        }
    }
}

const listaDeTarefas = new ListaDeTarefasImpl();

listaDeTarefas.adicionarTarefa("Estudar TypeScript");
listaDeTarefas.adicionarTarefa("Estudar Angular");
listaDeTarefas.listarTarefas();
listaDeTarefas.removerTarefa(1);