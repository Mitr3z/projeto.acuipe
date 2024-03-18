document.getElementById('formulario-registro').addEventListener('submit', function(event) {
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        event.preventDefault(); // Impede o envio do formulário
    }
});

document.getElementById('formulario-registro').addEventListener('submit', function(event) {
    var dataNascimento = document.getElementById('data-nascimento').value;
    var dataFormatada = dataNascimento.split('/');

    if (dataFormatada.length !== 3) {
        alert('Por favor, insira a data no formato dd/mm/aaaa.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    var dia = parseInt(dataFormatada[0], 10);
    var mes = parseInt(dataFormatada[1], 10);
    var ano = parseInt(dataFormatada[2], 10);

    var dataValida = new Date(ano, mes - 1, dia);

    if (dataValida.getFullYear() !== ano || dataValida.getMonth() + 1 !== mes || dataValida.getDate() !== dia) {
        alert('Por favor, insira uma data válida.');
        event.preventDefault(); // Impede o envio do formulário
    }
});

function formatarCPF(cpf) {
    var valor = cpf.value;
    valor = valor.replace(/\D/g, ""); // Remove caracteres não numéricos
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona ponto após o terceiro dígito
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona ponto após o sexto dígito
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona traço após o nono dígito
    cpf.value = valor;
}

function formatarTelefone(telefone) {
    var valor = telefone.value;
    valor = valor.replace(/\D/g, ""); // Remove caracteres não numéricos
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2"); // Adiciona parênteses e espaço após os dois primeiros dígitos
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona traço após o quinto dígito
    telefone.value = valor;
}

function formatarData(data) {
    var valor = data.value;
    valor = valor.replace(/\D/g, ""); // Remove caracteres não numéricos
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2"); // Adiciona barra após o segundo dígito
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2"); // Adiciona barra após o quarto dígito
    data.value = valor;
}

function formatarCEP(cep) {
    var valor = cep.value;
    valor = valor.replace(/\D/g, ""); // Remove caracteres não numéricos
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona traço após o quinto dígito
    cep.value = valor;
}

