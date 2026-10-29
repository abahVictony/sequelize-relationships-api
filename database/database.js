const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('relationalDatabase', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize