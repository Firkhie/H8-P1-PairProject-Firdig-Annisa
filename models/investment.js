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
      Investment.belongsToMany(models.User, { through: 'UserInvesments' });
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
    // hooks: {
    //   beforeCreate: (instance, options) => {
    //     let newTitle = instance.title.split(' ').join('_').toLowerCase()
    //     instance.isbn = `${newTitle}${instance.isbn}`;
    //   },
    // },
    sequelize,
    modelName: 'Investment',
  });
  return Investment;
};