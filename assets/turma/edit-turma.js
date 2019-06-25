listaNomeAlunos = [];
listaIdAlunos = [];

function getAluno(){
    var nomeAluno = $('#bota-nome-aluno').val();

    $.ajax({
        url : '/aluno/nome/',
        type : 'post',
        data : {
            nomeAluno : nomeAluno
        },
        success : function(aluno){
            listaNomeAlunos.push(aluno.nome);
            listaIdAlunos.push(aluno.id);
            reloadList();
        },
        error : function(aluno){
            alert("O aluno nao existe");
        }
    });
}

function reloadList(){
    var lista = document.getElementById('lista-alunos');
    while (lista.firstChild) {  //Removo todos os elementos da lista
        lista.removeChild(lista.firstChild);
    }

    listaNomeAlunos.forEach(nomeAluno => {
        var row = document.createElement('TR');
        var td = document.createElement('TD');
        var texto = document.createTextNode(nomeAluno);

        td.appendChild(texto);
        row.appendChild(td);
        
        lista.appendChild(row);
    });
}

function updateTurma(){
    console.log(listaNomeAlunos.length);
    var nomeTurma = $('#bota-nome-turma').val();
    console.log(nomeTurma);

    $.ajax({
        url : '/turma/update-turma',
        type : 'post',
        data : {
            id : turma.id,
            nome : nomeTurma,
            professor : turma.professor,
            alunos : listaIdAlunos
        },
        success : function(aluno){
            alert('Turma atualizada com sucesso');
            window.location.href = '/turma/' + turma.professor;
        },
        error : function(aluno){
            alert('Falha ao salvar turma');
        }
    });
}

turma.alunos.forEach(aluno => {
    listaNomeAlunos.push(aluno.nome);
    listaIdAlunos.push(aluno.id);
});