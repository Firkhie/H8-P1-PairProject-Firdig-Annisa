'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MemberDetail.belongsTo(models.User)
    }
  }
  MemberDetail.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MemberDetail',
  });
  return MemberDetail;
};