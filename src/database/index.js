const Sequelize = require('sequelize')
const DbConfig = require('../config/database.js')

function DbConnection() {
	return {
		db: new Sequelize(DbConfig),
		Sequelize
	}
}

module.exports = DbConnection()
