module.exports = {
	attributes: {
		nome: {type: 'string'},
		professor : {
			model : 'User'
		},
		alunos : {
			collection : 'Aluno',
			via : 'turmas'
		}
	}
};