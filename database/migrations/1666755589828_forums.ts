import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'forums'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("title", 255).notNullable();
      table.string("description", 255).notNullable();
      table.integer("user_id", 180).notNullable();
      table.timestamps(true);
    });
  }
  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
