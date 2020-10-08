function listen(app, port) {
	app.listen(port, () => {
		console.log('> [server] Listen on '+port)
	})
}

const core = require('./core')()
	.then(data => {
		listen(data.app, data.config.serverConfig.port)
	})
	.catch(err => {
		console.log('> [server] Errror '+err)
	})
