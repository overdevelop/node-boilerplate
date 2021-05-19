import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("student", table => {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    table.string("name", 255).notNullable();
    table.string("document", 20).notNullable();
    table.integer("age").notNullable();
    table.text("phones").nullable();
  });
}


export async function down(knex: Knex): Promise<void> {

}

