const Sequelize = require('sequelize');

const instanciadb = require('../db');

const columns = {
    credencial:{
        type: Sequelize.STRING,
        allowNull:false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    documento:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    atividade:{
        type: Sequelize.STRING,
        allowNull:false
    },
    data_nascimento:{
        type: Sequelize.DATE,
        allowNull:false
    },
    data_inicio:{
        type: Sequelize.DATE,
        allowNull:false
    },
    data_termino:{
        type:Sequelize.DATE,
        allowNull:true
    },
    trabalhando:{
        type: Sequelize.BOOLEAN,
        allowNull:false
    },
    salario:{
        type: Sequelize.FLOAT,
        allowNull:false
    }
}

const sequelizeOptions = {
    freezeTableName: true,
    tableName: 'funcionario',
    timestamps: true,
    createAt: 'data_cadastro',
    updateAt: 'data_atualizacao'
}

module.exports = instanciadb.define('funcionario', columns, sequelizeOptions)

