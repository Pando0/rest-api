require('dotenv').config()

module.exports = {
	dbConfig: {
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOSTNAME, 
		username: process.env.DB_USERNAME, 
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE, 
		define: {
			timestamps: true,
			underscored: true,
		},
		logging: false
	},
	serverConfig: {
		port: process.env.PORT
	}
}
