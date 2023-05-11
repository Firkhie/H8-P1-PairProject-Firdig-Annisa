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
      Investment.belongsToMany(models.User, { through: models.UserInvestment });
      Investment.belongsTo(models.Company)
    }

    getPercentage() {
      return `${this.returnOnInvestment}%`
    }
  }
  Investment.init({
    investmentName: DataTypes.STRING,
    CompanyId: DataTypes.INTEGER,
    investmentType: DataTypes.STRING,
    returnOnInvestment: DataTypes.INTEGER,
    investmentCode: DataTypes.STRING
  }, {
    hooks: {
      // beforeCreate: (instance, options) => {
      //   instance.investmentName = `${Company.companyName} ${this.investmentName}`
      // },
      beforeCreate: async (instance, options) => {
        const company = await sequelize.models.Company.findByPk(instance.CompanyId);
        instance.investmentName = `${company.companyName} ${instance.investmentName}`
      }
    },
    sequelize,
    modelName: 'Investment',
  });
  return Investment;
};