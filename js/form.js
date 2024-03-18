document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('meuFormulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio

        var nome = document.getElementById('nome').value;
        var idade = document.getElementById('idade').value;
        var telefone = document.getElementById('telefone').value;
        var opcao = document.getElementById('opcao').value;

        console.log('Nome:', nome);
        console.log('Idade:', idade);
        console.log('Telefone:', telefone);
        console.log('Opção escolhida:', opcao);

        // Aqui você pode adicionar o código para processar os dados como desejar
        // Por exemplo, enviar para um servidor via AJAX, validar os dados, etc.
    });
});
