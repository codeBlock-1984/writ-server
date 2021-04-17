'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articletags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      articletags.belongsTo(models.articles, {
        foreignKey: 'articleid',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      articletags.belongsTo(models.tags, {
        foreignKey: 'tagid',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  articletags.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    articleid: DataTypes.INTEGER,
    tagid: DataTypes.INTEGER,
    recordstatus: DataTypes.INTEGER,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE
  }, {
    timestamps: false,
    freezeTableName: true,
    sequelize,
    modelName: 'articletags',
  });
  return articletags;
};
