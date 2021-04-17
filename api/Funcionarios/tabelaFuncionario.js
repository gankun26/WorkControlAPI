
const modeloTabelaFuncionario = require('./modeloTabelaFuncionario');

module.exports = {
    async listar(){
        try{
           return await modeloTabelaFuncionario.findAll({
               raw: true,
           })
        }catch(error){
           throw error
        };
    },

    async cadastrar(funcionario){
        try{
          return await modeloTabelaFuncionario.create(funcionario);
        }catch(error){
            throw error
        };
    },

    async buscarPorPk(id){
        try{
            return await modeloTabelaFuncionario.findByPk(id);
        }catch(error){
            throw error
        };
    },

    async remover(id){
        try{
            return await modeloTabelaFuncionario.distroy({
                where:{
                    id:id
                }
            });
        }catch(error){
            throw error
        };
    },

    async atualizar(id, dados){
        try{
            return await modeloTabelaFuncionario.update(dados, {
                where:{
                    id:id
                }
            })
        }catch(error){
            throw error
        };
    }
}