module.exports = {
	attributes : {
		fase : {type : 'number'},
		num_erros : {type : 'number'},
		num_acertos : {type : 'number'},
		tempo : {type : 'number'},
		aluno : {
			model : 'Aluno'
		}
	}
};