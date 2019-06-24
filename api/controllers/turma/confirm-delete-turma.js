module.exports = {


  friendlyName: 'Confirm delete turma',


  description: 'Tela pro usuario confirmar se deseja realmente deletar a turma',


  inputs: {
    idTurma : {type : 'number'},
    idProfessor : {type : 'number'}
  },


  exits: {
    success : {
      viewTemplatePath : 'pages/turma/confirm-delete-turma'
    }
  },


  fn: async function (inputs) {
    return {
      idTurma : inputs.idTurma,
      idProfessor : inputs.idProfessor
    };
  }


};
