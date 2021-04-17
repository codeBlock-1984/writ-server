'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tags.hasMany(models.articletags, {
        foreignKey: 'tagid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  tags.init({
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
    modelName: 'tags',
  });
  return tags;
};
