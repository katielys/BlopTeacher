module.exports = {
	attributes : {
		nome : {type : 'string'},
		senha : {type : 'string'},
		pontuacoes : {
			collection : 'Pontuacao',
			via : 'aluno'
		},
		turmas : {
			collection : 'Turma',
			via : 'alunos'
		}
	}
};