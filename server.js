const express = require('express');
const cors = require('cors');

const PORT = 3333

//rotas
const routes = require('./routes/mathRoute');

const app = express()


app.use(cors())
app.use(express.json());

app.use('/',routes);


app.listen(PORT);

console.log(`RODANDO NA PORTA: ${PORT}`);