const tabelaFuncionario = require('./tabelaFuncionario');

class Funcionario{
    constructor({id, credencial, nome, documento, atividade,
         data_nascimento, data_inicio, data_termino, trabalhando,
          salario}){
              this.id = id;
              this.credencial = credencial;
              this.nome = nome;
              this.documento = documento;
              this.atividade = atividade;
              this.data_nascimento = data_nascimento;
              this.data_inicio = data_inicio;
              this.data_termino = data_termino;
              this.trabalhando = trabalhando;
              this.salario = salario;
          }

          async criar(){
              const result = await tabelaFuncionario.cadastrar({
                  nome: this.nome,
                  documento: this.documento,
                  atividade: this.atividade,
                  credencial: this.credencial,
                  data_nascimento: this.data_nascimento,
                  salario: this.salario,
                  data_inicio: this.data_inicio,
                  trabalhando: this.trabalhando
              });
              this.nome = result.nome;
              this.data_inicio = result.data_inicio;
              this.documento = result.documento;
          };

          async buscar(){
              const result = await tabelaFuncionario.buscarPorPk(this.id);
              this.nome = result.nome;
              this.documento = result.documento;
              this.atividade = result.atividade;
              this.data_inicio = result.data_inicio;
          }

          async remover(){
              await tabelaFuncionario.remover(this.id)
          }

          async atualizar(){
              await tabelaFuncionario.buscarPorPk(this.id);
              const camposAtualizaveis = ['nome', 'atividade', 'trabalhando', 'salario', 'credencial', 'documento']
              const dadosAtualizar = {}  
              
              camposAtualizaveis.forEach((campo) =>{
                  const valor = this[campo];
                  if(typeof valor === 'string' && valor.length > 0){
                      dadosAtualizar[campo] = valor
                  }
              });

              await tabelaFuncionario.atualizar(this.id, dadosAtualizar);
            }
}
module.exports = Funcionario;