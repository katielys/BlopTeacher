/**
 * Turma.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 200,
      example: 'Turma da Monica'
    },

    id: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 20,
      example: 'TCMO'
    },

    desempenhoGeral:{
      type:'string',
      maxLength:50,
      example:'10,0%'
    }


  },

  
  owner : {
    model: 'user'
  },

  alunos: {
    collection: 'aluno',
    via: 'study'
  }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝



};

