/*
Neste arquivo você insere as informações
do seu banco.
*/

module.exports = {
	dialect: 'postgres', // Tipo do banco
	host: 'localhost', // Hostname
	username: 'root', // Nome de usuario
	password: '12345', // Senha
	database: 'main', // Nome do banco
	define: {
		timestamps: true,
		underscored: true,
	},
	logging: false
}
