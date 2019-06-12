/**
 * TurmaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: function (req, res) {
        let data;

        data = {
            name: req.body.nome,
            id: req.boby.id,
            desempenhoGeral: "0"
        }
        Turma.create(data).fetch().exec(function (err, Turma) {
            if (err) return (err);
            return res.json(Turma);
        })
    },

    read: function (req, res) {
        Turma.find().exec(function (err, Turma) {
            return res.json(Turma);
        });
    },

    update: function (req, res) {
        let query;
        let data;
        query = { "id": req.param('id') }

        data = { 
            name: req.body.nome,
            id: req.boby.id,
            desempenhoGeral: req.body.desempenhoGeral
         }
        Turma.update(query, data).fetch().exec(function (err, Turma) {
            TurmaName = data.name;
            return res.json(Turma)
        })
    },

    delete: function (req, res) {
        let query;
        query = { "id": req.param('id') }
        Turma.destroy(query).fetch().exec(function (err, Turma) {
            if (err) return (err);
            return res.json(Turma)
        })
    },

};

