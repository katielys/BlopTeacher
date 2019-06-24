module.exports = {


  friendlyName: 'Get id',


  description: 'Recupera um aluno do banco utilizando o seu id',


  inputs: {
    idAluno : {type : 'number'}
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/aluno/view-aluno'
    }
  },


  fn: async function (inputs) {
    var aluno = await Aluno.findOne({
      id : inputs.idAluno
    }).populate('pontuacoes');

    return {aluno : aluno};
  }
};
