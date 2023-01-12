module.exports = ({env}) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('PROD', false) ? `/cloudsql/${env('DB_INSTANCE_NAME')}` : env('DB_INSTANCE_NAME', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bit-db'),
      user: env('DATABASE_USERNAME', 'andreo'),
      password: env('DATABASE_PASSWORD', 'andreo123'),
      ssl: env.bool('DATABASE_SSL', false)
    }
  }
});
