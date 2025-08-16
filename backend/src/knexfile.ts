import type { Knex } from 'knex';

const config: Knex.Config = {
    client: process.env.MYSQL_CLIENT,
    connection: {
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT || '3306', 10),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations',
        extension: 'ts',
    }
}

export default config;
module.exports = config;