module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', '0.0.0.0'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'bit-db'),
			user: env('DATABASE_USERNAME', 'andreo'),
			password: env('DATABASE_PASSWORD', 'andreo123'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
