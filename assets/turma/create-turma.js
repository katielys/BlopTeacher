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
            listaAlunos.push({
                "id" : aluno.id,
                "nome" : aluno.nome
            });
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
        var td1 = document.createElement('TD');
        var td2 = document.createElement('TD');
        var butao = document.createElement('button');
        var texto = document.createTextNode(aluno.nome);
        
        //Setar o nome, value e style
        butao.setAttribute('name', aluno.nome);
        butao.setAttribute('class', "btn btn-primary");
        butao.innerHTML = "Remover";
        
        //Setar a acao
        butao.addEventListener("click", function(){
            for(var i = 0; i < listaAlunos.length; i++){ 
                if (listaAlunos[i].nome === this.name) {
                    listaAlunos.splice(i, 1); 
                }
            }
            reloadList();
        });

        td1.appendChild(texto);
        td2.appendChild(butao);
        row.appendChild(td1);
        row.appendChild(td2);
        
        lista.appendChild(row);
    });
}

function salvaTurma(){
    console.log(listaAlunos.length);
    var nomeTurma = $('#bota-nome-turma').val();
    var listaIdAlunos = [];
    console.log(nomeTurma);
    console.log(teacher.fullName);

    listaAlunos.forEach(aluno => {
        listaIdAlunos.push(aluno.id);
    });

    $.ajax({
        url : '/turma/nova-turma',
        type : 'post',
        data : {
            nome : nomeTurma,
            professor : teacher.id,
            alunos : listaIdAlunos
        },
        success : function(aluno){
            alert('Turma salva com sucesso');
            window.location.href = '/turma/' + teacher.id;
        },
        error : function(aluno){
            alert('Falha ao salvar turma');
        }
    });
}