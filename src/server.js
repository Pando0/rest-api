function listen(app, port) {
	return app.listen(port, () => {
		console.log('> [server] Listen on '+port)
	})
}

const core = require('./core')()
	.then(data => {
		listen(data.app, data.config.serverConfig.port)
			.on('error', err => {
				console.log('[server] Error on server listening '+err)
			})
	})
	.catch(err => {
		console.log('> [server] Errror '+err)
	})
