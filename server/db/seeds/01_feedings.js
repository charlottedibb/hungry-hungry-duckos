exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("feedings")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("feedings").insert([
        {
          duck_count: 1,
          food_type: "bread",
          food_amount: "100g",
          latitude: 0,
          longitude: 0
        },
        {
          duck_count: 5,
          food_type: "seeds",
          food_amount: "200g",
          latitude: 0,
          longitude: 0
        },
        {
          duck_count: 12,
          food_type: "crackers",
          food_amount: "700g",
          latitude: 0,
          longitude: 0
        }
      ]);
    });
};
