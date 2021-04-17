'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      clients.hasMany(models.clientusers, {
        foreignKey: 'clientid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  clients.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    recordstatus: DataTypes.INTEGER,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE
  }, {
    timestamps: false,
    freezeTableName: true,
    sequelize,
    modelName: 'clients',
  });
  return clients;
};
