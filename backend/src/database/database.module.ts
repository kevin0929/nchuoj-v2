import { Module } from '@nestjs/common';
import knex, { Knex } from 'knex';
import knexConfig from '../../knexfile';

export const KNEX = Symbol('KNEX_CONNECTION');

@Module({
    providers: [
        {
            provide: KNEX,
            useFactory: (): Knex => {
                return knex(knexConfig);
            },
        },
    ],
    exports: [KNEX],
})
export class DatabaseModule {}