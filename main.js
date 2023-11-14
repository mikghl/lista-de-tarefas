$(document).ready(function() {
    let contadorTarefas = 0;

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaTarefa = $('#nome-da-tarefa').val();
        contadorTarefas++;
        const novoItem = $('<li></li>').text(`${contadorTarefas}. ${nomeDaTarefa}`);
        $('ul').append(novoItem);
        $('#nome-da-tarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('feito');
    })

    $('form').on('reset', function() {
        contadorTarefas = 0;
        $('ul').empty();
    })
})