import { DataTypes } from 'sequelize';
import sequelize from '../banco/banco.js';

const user = sequelize.define('usuario', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
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
  }
}, {
  tableName: 'usuario', 
  timestamps: false
});

export default user;