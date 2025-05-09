import user from './usuario.js';
import contato from './contato.js';

const RelationTables = () => {
  User.hasMany(contato, {
    foreignKey: 'userId',
    as: 'contatos',
  });

  Contato.belongsTo(user, {
    foreignKey: 'userId',
    as: 'user',
  });
};

export default RelationTables;