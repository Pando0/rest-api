const userModel = require('../models/usermodel.js')

function userController() {
	const register = async (req, res) => {
		let newUserData = req.body
		try {
			let newUser = await userModel.create({
				name: newUserData.name,
				email: newUserData.email,
				password: newUserData.password
			})
			newUser.password = undefined
			return await res.send(newUser)
		} catch(err) {
			return await res.send({ error: err.name })
		}
	}

	return {
		register
	}
}

module.exports = userController()
