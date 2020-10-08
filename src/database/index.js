const Sequelize = require('sequelize')

function DbConnection(dbConfig) {
	console.log('> [database] Starting...')
	const db = new Sequelize(dbConfig)

	const start = () => {
		console.log('> [database] Started!')
		return {
			db,
			Sequelize
		}
	}

	const stop = () => {
		console.log('> [database] Stopping...')
		return db.close()
	}

	return {
		start,
		stop
	}
}

module.exports = DbConnection
