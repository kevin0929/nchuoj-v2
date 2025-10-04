import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('student_id', 20).notNullable().unique();
        table.string('username', 50).notNullable().unique();
        table.string('password', 255).notNullable();
        table.string('email', 100).notNullable().unique();
        table.string('role', 20).defaultTo('student');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('last_login_at').nullable();
        table.string('last_login_ip', 45).nullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('user');
}

