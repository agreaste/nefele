module.exports = ({env}) => ({
  connection: {
    client: 'mysql',
    connection: {
      ...(env('PROD', false) ? {
        socketPath: `/cloudsql/${env('DB_INSTANCE_NAME')}`,
      } : {
        host: env('DATABASE_HOST', 'localhost'),
      }),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bit-db'),
      user: env('DATABASE_USERNAME', 'andreo'),
      password: env('DATABASE_PASSWORD', 'andreo123'),
      ssl: env.bool('DATABASE_SSL', false)
    },
    pool: {
      min: 0,
      acquireTimeoutMillis: 10000,
      createTimeoutMillis: 10000
    }
  }
});
