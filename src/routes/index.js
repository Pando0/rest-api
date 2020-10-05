const express = require('express')
const userController = require('../controllers/usercontroller')

function Routes() {
	const router = express.Router()

	router.post('/register', userController.register)
	
	return {
		router
	}
}

module.exports = app => {
	app.use('/api', Routes().router)
}
