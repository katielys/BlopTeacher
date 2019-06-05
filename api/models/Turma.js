/**
 * Turma.js
 *
 *Classe para modelar turma de alunos
 */

 module.exports = {
    nome: {
        type: 'string',
        required: true,
        unique: true,
        maxLength: 200,
        example: 'Turma da monica'
      },

    codigo:{
        type: 'string',
        required: true,
        unique: true,
        maxLength: 200,
        example: '374 da monica'
    },
    



 };
