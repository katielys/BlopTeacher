module.exports = {


    friendlyName: 'View create turma',
  
  
    description: 'Tela onde o usuario coloca as informacoes para criar uma turma',
  
    inputs : {
      idProfessor : {type : 'number'}
    },
  
    exits: {
      success: {
        viewTemplatePath: 'pages/turma/view-create-turma'
      }
    },
  
  
    fn: async function (inputs) {
      var teacher = await User.findOne({id : inputs.idProfessor});

      return {
        professor : teacher
      };
    }
  };
  