exports.up = function(knex) {
  return knex.schema.createTable("feedings", function(table) {
    table.increments();
    table.integer("duck_count");
    table.string("food_type");
    table.string("food_amount");
    table.decimal("latitude", [8], [6]);
    table.decimal("longitude", [9], [6]);
    table.dateTime("feeding_time");
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("feedings");
};
