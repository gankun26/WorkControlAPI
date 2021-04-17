const modeloTabelaFuncionario = require('../Funcionarios/modeloTabelaFuncionario');


modeloTabelaFuncionario.sync()
.then(() =>{
    console.log('Funcionario cadastrado com sucesso!')
})
.catch(() =>{
    console.log('Error, funcionario não cadastrado')
});

