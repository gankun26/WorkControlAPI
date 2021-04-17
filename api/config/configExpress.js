const express = require('express');
const routerFuncionarios = require('../routes/funcionarios/');



module.exports = () =>{
    
    const app = express()

    
    app.use(express.json())

    app.use('/api', routerFuncionarios)
  

    return app
}



