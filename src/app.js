const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

function App() {
	const app = express()
	app.use(bodyparser.urlencoded({extended: false}))
	app.use(bodyparser.json())
	app.use(cors())
	
	return {
		app
	}
}

module.exports = App
