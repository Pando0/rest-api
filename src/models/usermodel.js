const { db, Sequelize } = require('../database')
const bcrypt = require('bcryptjs')

// user model
const User = db.define('user', {
	name: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	email: {
		type: Sequelize.TEXT,
		allowNull: false,
		unique: true
	},
	password: {
		type: Sequelize.STRING(60),
		allowNull: false
	}
})

// Hooks
User.addHook('beforeCreate', async (user) => {
	user.password = await bcrypt.hashSync(user.password)
})

module.exports = User
