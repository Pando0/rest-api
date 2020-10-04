const express = require('express')

function Routes() {
	const router = express.Router()

	router.get('/', (req, res) => {
		res.send('Hello World')
	})

	return {
		router
	}
}

module.exports = app => {
	app.use('/api', Routes().router)
}
