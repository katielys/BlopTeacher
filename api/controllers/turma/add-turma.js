module.exports = async function (req, res) {
  await Turma.create({
    nome : req.body.nome,
    professor : req.body.professor,
    alunos : req.body.alunos
  });

  return res.ok();
};