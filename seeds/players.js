
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, name: 'Thor', balls: 0, strikes: 1},
        {id: 2, name: 'Spiderman', balls: 0, strikes: 1},
        {id: 3, name: 'Ironman', balls: 0, strikes: 1},
        {id: 4, name: 'Black Widow', balls: 0, strikes: 1}
      ]);
    });
};
