const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');

let linhasTabela = '';


form.addEventListener('submit', function(evento){
    evento.preventDefault();
    inserirLinhaNaTabela();
    limparInputs();
})

function formatarNumeroTelefone(numeroTelefone) {
    // Remove todos os caracteres que não são números
    numeroTelefone = numeroTelefone.replace(/\D/g, '');  
    // Formata o número
    numeroTelefone = numeroTelefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');    
    // Retorna o número formatado
    return numeroTelefone;
  }

function inserirLinhaNaTabela(){
    const corpoTalela = document.querySelector('tbody');    
    let linhaAdicionada = `<tr><td>${nome.value}</td><td>${formatarNumeroTelefone(telefone.value)}</td></tr>`;
    linhasTabela = linhasTabela + linhaAdicionada;
    corpoTalela.innerHTML = linhasTabela;
}

function limparInputs(){
    nome.value = '';
    telefone.value = '';
}



