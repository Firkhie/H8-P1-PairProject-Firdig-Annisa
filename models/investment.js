'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Investment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Investment.belongsToMany(models.User, { through: 'UserInvesment' });
      Investment.belongsTo(models.Company)
    }
  }
  Investment.init({
    investmentName: DataTypes.STRING,
    CompanyId: DataTypes.INTEGER,
    investmentType: DataTypes.STRING,
    returnOnInvestment: DataTypes.INTEGER,
    investmentCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Investment',
  });
  return Investment;
};