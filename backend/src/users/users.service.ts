import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { KNEX } from '../database/database.module';

@Injectable()
export class UsersService {
    constructor(@Inject(KNEX) private readonly knex: Knex) {}

    async findAll() {
        return this.knex('users').select('*');
    }
}
