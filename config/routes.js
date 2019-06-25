/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /faq':                { action:   'view-faq' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },
  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',

  //-------------------ROTAS DO BLOP----------------------
  //Aluno
  'GET /aluno/id/:idAluno' : { action : 'aluno/get-id' },
  'POST /aluno/nome/' : { action : 'aluno/get-nome' },
  //Pontuacao

  //Turma
  'GET /turma/:professor' : { action : 'turma/get-turmas' },
  'GET /turma/detalhes/:idTurma' : { action : 'turma/view-turma' },
  'GET /turma/create-turma/:idProfessor' : { action : 'turma/view-create-turma' },
  'POST /turma/nova-turma' : { action : 'turma/add-turma' },
  'GET /turma/edit-turma/:idTurma' : { action : 'turma/view-edit-turma'},
  'POST /turma/update-turma' : {action : 'turma/edit-turma' },
  'GET /turma/confirm-delete/:idTurma/:idProfessor' : { action : 'turma/confirm-delete-turma'},
  'POST /turma/delete/:idTurma/:idProfessor' : { action : 'turma/delete-turma' },

  //------------------FIM ROTAS DO BLOP-------------------

  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },

};
