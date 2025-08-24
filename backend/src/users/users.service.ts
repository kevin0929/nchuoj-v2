import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class UsersService {
    constructor(@Inject('KNEX_CONNECTION') private readonly knex: Knex) {}

    async findAll() {
        return this.knex('users').select('*');
    }

    async create(user: any) {
        return this.knex('users').insert(user);
    }
}
