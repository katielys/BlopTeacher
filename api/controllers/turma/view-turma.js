module.exports = {


  friendlyName: 'View turma',


  description: 'Mostra em detalhes as informacoes de uma turma',

  inputs : {
    idTurma : {type : 'number'}
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/turma/view-turma'
    }
  },


  fn: async function (inputs) {
    var turma = await Turma.findOne({id : inputs.idTurma}).populate('alunos');

    return {
      turma : turma
    };
  }
};
