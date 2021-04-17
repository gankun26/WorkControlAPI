const router = require('express').Router();
const tabelaFuncionario = require('../../Funcionarios/tabelaFuncionario');
const Funcionario = require('../../Funcionarios/Funcionario');

router.post('/funcionarios', async(req, resp) => {
  try{
    const reqFuncionario = req.body;
    const funcionario = new Funcionario(reqFuncionario);
    await funcionario.criar();
    resp.send(JSON.stringify(funcionario))
  } catch (error) {
    resp.send(error);
  }
});

router.get('/funcionarios/:idFuncionario', async(req, resp) => {
  try {
    const id = req.params.idFuncionario;
    const funcionario = new Funcionario({id: id});
    await funcionario.buscar();
    resp.send(JSON.stringify(funcionario));
  } catch(error){ 
    resp.send(error);
  }
});

router.put('/funcionarios/:idFuncionario', async(req, resp) => {
  try {
    const id = req.params.idFuncionario;
    const dados = req.body;
    const funcionario = new Funcionario({id: id});
    await funcionario.atualizar(dados);
    resp.send(JSON.stringify(funcionario));

  } catch(error){
    resp.send(error)
  }
});

router.delete('/funcionarios/:idFuncionario', async(req, resp) => {
  try{
    const id = req.params.idFuncionario;
    const funcionario = new Funcionario({id: id});
    await funcionario.remover();
    resp.status(204).send(JSON.stringify({
      mensagem: 'Funcionario removido'
    }))
  } catch(error) {
    resp.send(error);
  }
});

module.exports = router;