'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      articles.hasMany(models.articletags, {
        foreignKey: 'articleid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      articles.belongsTo(models.genres, {
        foreignKey: 'genreid',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  articles.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.TEXT,
    genreid: DataTypes.INTEGER,
    recordstatus: DataTypes.INTEGER,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE
  }, {
    timestamps: false,
    freezeTableName: true,
    sequelize,
    modelName: 'articles',
  });
  return articles;
};
