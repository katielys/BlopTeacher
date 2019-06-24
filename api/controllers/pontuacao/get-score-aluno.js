module.exports = {


  friendlyName: 'Get score aluno',


  description: 'Obtem as pontuacoes de um determinado aluno',


  inputs: {
    idAluno : {type : 'number'}
  },


  exits: {

  },


  fn: async function (inputs) {
    var scores = await Pontuacao.find({
      aluno : inputs.idAluno
    });

    if(!scores){
      return exits.invalid({
        message : 'O aluno nao possui pontuacoes no sistema'
      });
    }

    return scores;
  }
};
