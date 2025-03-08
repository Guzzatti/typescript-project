interface Notificacao {
    enviar(mensagem: string): void;
}

class EmailNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

class SmsNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

class PushNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando push notification: ${mensagem}`);
    }
}

class Usuario {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    receberNotificacao(notificacao: Notificacao, mensagem: string): void {
        console.log(`${this.nome} recebeu uma notificação:`);
        notificacao.enviar(mensagem);
    }
}

const usuario = new Usuario("Gabriel");
const email = new EmailNotificacao();
const sms = new SmsNotificacao();
const push = new PushNotificacao();

usuario.receberNotificacao(email, "Seu pedido foi enviado!");
usuario.receberNotificacao(sms, "Seu código de verificação é 123456");
usuario.receberNotificacao(push, "Você tem uma nova mensagem no app!");
