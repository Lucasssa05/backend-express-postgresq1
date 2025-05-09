// nome / telefone/ email / endereço 
import { DataTypes } from 'sequelize';
import sequelize from '../banco/banco.js'; // caminho para sua instância do Sequelize

const contato = sequelize.define('contato', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    set(value) {
      this.setDataValue('email', value.trim().toLowerCase());
    }
  },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
  tableName: 'contato', // Nome da tabela no banco
  timestamps: false   // se quiser evitar createdAt e updatedAt
});

export default contato;