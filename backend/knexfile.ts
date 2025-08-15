import type { Knex } from 'knex';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: '../.env' });

const config: Knex.Config = {
    client: process.env.MYSQL_CLIENT || 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: parseInt(process.env.MYSQL_PORT || '3306', 10),
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'nchuoj',
    },
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations',
        extension: 'ts',
    }
}

export default config;