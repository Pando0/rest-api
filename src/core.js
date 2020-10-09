function getConfig() {
	return require('./config')
}

function getDatabase() {
	return require('./database')
}

async function testDatabase(db, dbConfig) {
	const dbConnected = db(dbConfig).start()
	await dbConnected.db.authenticate()
	return await dbConnected
}

function getApp() {
	return require('./app')()
}

async function exportDependencies() {
	try {
		const config = getConfig()
		const db = getDatabase()
		const dbConnected = await testDatabase(db, config.dbConfig)
		const { app } = getApp()

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
