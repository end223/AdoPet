'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class abrigos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  abrigos.init({
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'abrigos',
  });
  return abrigos;
};