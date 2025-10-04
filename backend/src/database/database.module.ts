import { Module, Global } from '@nestjs/common';
import knex, { Knex } from 'knex';

@Global()
@Module({
    providers: [
        {
            provide: 'KNEX_CONNECTION',
            useFactory: (): Knex => {
                const knexConfig: Knex.Config = {
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
                    },
                }
                return knex(knexConfig);
            },
        },
    ],
    exports: ['KNEX_CONNECTION'],
})
export class DatabaseModule {}