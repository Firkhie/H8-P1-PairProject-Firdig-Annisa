'use strict';
const {
  Model
} = require('sequelize');

const getRandomCode = require('../helpers/getRandomCode')
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

    static showInvestmentWithCompany(Company, filter) {
      return Investment.findAll({
        where: filter,
        include: {
            model: Company
        }
      })
    }

    getPercentage() {
      return `${this.returnOnInvestment}%`
    }

    
    static showInvestmentWithCompany(Company, filter) {
      return Investment.findAll({
        where: filter,
        include: {
            model: Company
        }
      })
    }

  }
  Investment.init({
    investmentName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name tidak boleh kosong!'
        }
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Company tidak boleh kosong!'
        }
      }
    },
    investmentType: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Type tidak boleh kosong!'
        }
      }
    },
    returnOnInvestment: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'ROI tidak boleh kosong!'
        },
        max: {
          args: 10,
          msg: 'ROI tidak boleh melebihi 10%'
        }
      }
    },
    investmentCode: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: async (instance, options) => {
        const company = await sequelize.models.Company.findByPk(instance.CompanyId);
        instance.investmentName = `${company.companyName} ${instance.investmentName}`
        instance.investmentCode = `${instance.CompanyId}-${getRandomCode()}`
      }
    },
    sequelize,
    modelName: 'Investment',
  });
  return Investment;
};