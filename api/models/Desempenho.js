/**
 * Desempenho.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    erros: {
      type: 'string',
      maxLength: 200,
      example: '10'
    },

    acertos: {
      type: 'string',
      maxLength: 200,
      example: '10'
    },

    tempo: {
      type: 'string',
      maxLength: 200,
      example: '10'
    },

  },
  
  study : {
    model: 'aluno'
  },

  notinha : {
    model: 'desempenho'
  },

};

