const config = require('./config/default.json');
const configExpress = require('./api/config/configExpress');

app = configExpress()

app.listen(3000, () => {
    console.log('Servidor Voando')
})
