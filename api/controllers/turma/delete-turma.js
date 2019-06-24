module.exports = {


  friendlyName: 'Delete turma',


  description: 'Deleta uma turma especificada',


  inputs: {
    idTurma  : {type : 'number'}
  },


  exits: {

  },


  fn: async function (inputs) {
    var record = await Turma.destroy({id : inputs.id});
    
    return;
  }


};
