class Contatos{ //Definindo a classe contatos
    constructor(nome, email, telefone, mensagem){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.mensagem = mensagem;
    }
}

class GerenciadorContatos{
    constructor(){
        this.contatos = []; //Inicializa a çidta de contatos
    }

    adicionarContatos(contato){
        this.contatos.push(contato);
    }

    exibirContatos(){
        const listaContatos = document.getElementById('contato-lista'); //Obtém a lista de contatos

        listaContatos.innerHTML = '' //Limpa a lista

        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.mensagem}`

            listaContatos.appendChild(li);
        }
    }
}

const gerenciadorContatos = new GerenciadorContatos(); //Cria um objeto da classe GreneciadorContatos

//Cria os elementos necessários
const contatoForm = document.getElementById('contato-form');
const nomeForm = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('tel');
const mensagemForm = document.getElementById('mensagem');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = nomeForm.value;
    const email = emailForm.value;
    const telefone = telefoneForm.value;
    const mensagem = mensagemForm.value;

    const contato = new Contatos(nome, email, telefone, mensagem); //Criando objeto a classe contato

    gerenciadorContatos.adicionarContatos(contato);

    nomeForm.value = ''
    emailForm.value = ''
    telefoneForm.value = ''
    mensagemForm.value = ''
});

mostrarContatos.addEventListener('click', function(){ //Exibe contatos
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
});

ocultarContatos.addEventListener('click', function(){ //Oculta contatos
    listaContatos.style.display = 'none';
})