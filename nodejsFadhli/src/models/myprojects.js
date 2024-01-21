'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class myprojects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  myprojects.init({
    projectname: DataTypes.STRING,
    description: DataTypes.STRING,
    star_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    resethari: DataTypes.INTEGER,  
    resetbulan: DataTypes.INTEGER, 
    tahun: DataTypes.INTEGER,
    logos: DataTypes.ARRAY(DataTypes.TEXT)
  }, {
    sequelize,
    modelName: 'myprojects',
  });
  return myprojects;
};