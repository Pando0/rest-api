async function exportDependencies() {
	try {
		const config = require('./config')
		const db = require('./database')(config.dbConfig)
		const dbConnected = db.start()
		await dbConnected.db.authenticate()
		const { app } = require('./app')()

		return {
			dbConnected,
			app,
			config
		}
	} catch(err) {
		console.log('> [core] Error in '+err)
		console.log('> [core] Try config your file .env with template of README.md or run the project in root of project.')
		throw err 
	}
}

module.exports = exportDependencies
