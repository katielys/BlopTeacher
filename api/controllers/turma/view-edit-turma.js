module.exports = {


    friendlyName: 'View edit turma',
  
  
    description: 'Tela onde o usuario atualiza as informacoes de uma turma',
  
    inputs : {
      idTurma : {type : 'number'}
    },
  
    exits: {
      success: {
        viewTemplatePath: 'pages/turma/view-edit-turma'
      }
    },
  
  
    fn: async function (inputs) {
      var turma = await Turma.findOne({id : inputs.idTurma}).populate('alunos');

      return {
        turma : turma
      };
    }
  };
  