module.exports = {


  friendlyName: 'Delete turma',


  description: 'Deleta uma turma especificada',


  inputs: {
    idTurma  : {type : 'number'},
    idProfessor : {type : 'number'}
  },


  exits: {
    success : {
      viewTemplatePath : 'pages/turma/turmas-professor'
    }
  },


  fn: async function (inputs) {
    var record = await Turma.destroy({id : inputs.idTurma});
    var turmasProf = await Turma.find({
      professor : inputs.professor
    }).populate('alunos');
    
    return {turmas : turmasProf};
  }


};
