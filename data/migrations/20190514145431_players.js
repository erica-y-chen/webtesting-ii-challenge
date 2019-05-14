
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('players', tbl => {
        tbl.increments();
        tbl
            .string('name', 200)
            .notNullable()
            .unique();
        

        tbl
        .integer('balls')
        .notNullable()
        .defaultTo(0)

        tbl
        .integer('strikes')
        .notNullable()
        .defaultTo(0)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('players')
};
