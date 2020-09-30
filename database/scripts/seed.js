const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/reviews',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  (client) => {
    const db = client.db('reviews');
    const reviewsCollection = db.collection('reviews');
    let reviews = [];

    for (let i = 1; i < 301; i++) { //301
      let rank;
      let percentage = Math.floor(Math.random() * 28) + 72;

      if (percentage >= 80) {
        rank = 'Very Positive';
      } else {
        rank = 'Mostly Positive';
      }

      let fakeReview = {
        game_id: i,
        review:
          {
            top_review: faker.lorem.paragraph(),
            percent: percentage.toString() + '%',
            quantity: faker.random.number(),
            general_rank: rank,
            source: 'Steam'
          }
      }
      reviews.push(fakeReview);
    }
    reviewsCollection.insertMany(reviews)
    .then(res => {
      console.log(`DB successfully seeded with ${res.result.n} entries!`);
    })
  })
  .catch(err => {
    console.log('Unsuccessful seeding!:', err);
  });