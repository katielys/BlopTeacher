module.exports = async function (req, res) {
  await Turma.update({id : req.body.id}).set({
    nome : req.body.nome,
    alunos : req.body.alunos
  });

  return res.ok();
};