module.exports = {


  friendlyName: 'Get turmas',


  description: 'Obtem as turmas de um determinado professor',


  inputs: {
    professor : {type : 'number'}
  },


  exits: {
    success : {
      viewTemplatePath : 'pages/turma/turmas-professor'
    }
  },


  fn: async function (inputs) {
    var turmasProf = await Turma.find({
      professor : inputs.professor
    }).populate('alunos');
    
    if(!turmasProf){
      return exits.invalid({
        message : 'O professor nao possui turmas no sistema'
      });
    }

    return {
      turmas : turmasProf,
      idProfessor : inputs.professor
    };
  }
};
