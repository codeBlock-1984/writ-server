'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientusers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      clientusers.belongsTo(models.users, {
        foreignKey: 'userid',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      clientusers.belongsTo(models.clients, {
        foreignKey: 'clientid',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  clientusers.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userid: DataTypes.INTEGER,
    clientid: DataTypes.INTEGER,
    recordstatus: DataTypes.INTEGER,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE
  }, {
    timestamps: false,
    freezeTableName: true,
    sequelize,
    modelName: 'clientusers',
  });
  return clientusers;
};
