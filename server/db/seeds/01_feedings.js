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
          latitude: 48.413232389247604,
          longitude: -123.36283459495435,
          feeding_time: "2021-03-01T12:10"
        },
        {
          duck_count: 5,
          food_type: "seeds",
          food_amount: "200g",
          latitude: 48.412272013379976,
          longitude: -123.34595441395885,
          feeding_time: "2021-01-01T12:10"
        },
        {
          duck_count: 12,
          food_type: "crackers",
          food_amount: "700g",
          latitude: 48.41214396189377,
          longitude: -123.32039299702282,
          feeding_time: "2021-02-01T12:00"
        }
      ]);
    });
};
