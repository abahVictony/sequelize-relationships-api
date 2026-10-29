'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    Users.hasMany(models.posts, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    }
  }
  Users.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique:  true
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM('Male', 'Female'),
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users',
  });
  return Users;
};