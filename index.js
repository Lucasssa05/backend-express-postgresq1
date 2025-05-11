import express from 'express'
import router from './src/routes/routes.js'

import sequelize from './src/banco/banco.js';
import User from './src/models/usuario.js';
import Contato from './src/models/contato.js';
import relacionamentos from './src/models/relacionamentos.js';


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado com sucesso ao PostgreSQL da Vercel/Neon!');

    await sequelize.sync(); 
    console.log('Modelos sincronizados.');

  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
})();

const app = express();



app.use(express.json());
app.use(router);

app.listen(8080)