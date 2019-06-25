listaAlunos = [];

function getAluno(){
    var nomeAluno = $('#bota-nome-aluno').val();

    $.ajax({
        url : '/aluno/nome/',
        type : 'post',
        data : {
            nomeAluno : nomeAluno
        },
        success : function(aluno){
            listaAlunos.push(aluno);
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

    listaAlunos.forEach(aluno => {
        var row = document.createElement('TR');
        var td = document.createElement('TD');
        var texto = document.createTextNode(aluno.nome);

        td.appendChild(texto);
        row.appendChild(td);
        
        lista.appendChild(row);
    });
}

function salvaTurma(){
    console.log(listaAlunos.length);
    var nomeTurma = $('#bota-nome-turma').val();
    console.log(nomeTurma);
    console.log(teacher.fullName);

    $.ajax({
        url : '/turma/nova-turma',
        type : 'post',
        data : {
            nome : nomeTurma,
            professor : teacher,
            alunos : listaAlunos
        },
        success : function(aluno){
            alert('sucesso');
        },
        error : function(aluno){
            alert('Sem sucesso');
        }
    });
}