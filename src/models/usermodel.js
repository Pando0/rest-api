const bcrypt = require('bcryptjs')

function createUserModel(dbStarted) {

	const hooks = model => {
		model.addHook('beforeCreate', async (user) => {
			user.password = await bcrypt.hashSync(user.password)
		})
		return model
	}

	const getUserModel = () => {
		const { db, Sequelize } = dbStarted
		const User = hooks(db.define('user', {
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
		}))
		User.sync()
		return User
	}
	
	return {
		getUserModel
	}
}

module.exports = createUserModel
