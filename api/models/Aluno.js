/**
 * Aluno.js
 *
 *Aluno alvo a ser monitorado
 */

 module.exports = {
    emailAddress: {
        type: 'string',
        required: true,
        unique: true,
        isEmail: true,
        maxLength: 200,
        example: 'mary.sue@example.com'
      },

      fullName: {
        type: 'string',
        required: true,
        description: 'Full representation of the user\'s name.',
        maxLength: 120,
        example: 'Mary Sue van der McHenst'
      },

      nickName:{
        type:'string',
        required:true,
        description: 'Representacao de um apelido de um aluno.',
      },

      password: {
        type: 'string',
        required: true,
        description: 'Securely hashed representation of the user\'s login password.',
        protect: true,
        example: '2$28a8eabna301089103-13948134nad'
      },
      lastSeenAt: {
        type: 'number',
        description: 'A JS timestamp (epoch ms) representing the moment at which this user most recently interacted with the backend while logged in (or 0 if they have not interacted with the backend at all yet).',
        example: 1502844074211
      },


 };