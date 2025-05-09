// nome / telefone/ email / endereço 
import { DataTypes } from 'sequelize';
import sequelize from '../banco/banco.js';

const contato = sequelize.define('contato', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'contatos',
  timestamps: false
});

export default contato;