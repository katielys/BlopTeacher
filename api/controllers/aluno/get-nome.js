//Retorna os dados do aluno em formato JSON. Esse controlador eh usado especialmente para o momento de adicionar alunos numa turma
module.exports = async function (req, res) {
    var aluno = await Aluno.findOne({
        nome : req.body.nomeAluno
    });

    return res.json(aluno);
};
  