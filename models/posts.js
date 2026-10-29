'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      posts.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'Users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  posts.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: {  
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('Draft', 'Published', 'Archieved'),
        defaultValue: 'Draft'
      },
      visibility: {
        type: DataTypes.ENUM('Private', 'Public', 'Friends Only'),
        defaultValue: 'Public'
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false
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
    modelName: 'posts',
    tableName: 'posts',
  });
  return posts;
};