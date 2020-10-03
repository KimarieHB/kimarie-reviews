const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

let _client;

MongoClient.connect('mongodb://localhost/reviews',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  (client) => {
    _client = client;
    const db = client.db('reviews');
    const reviewsCollection = db.collection('reviews');
    let reviews = [];

    for (let i = 1; i < 301; i++) { //301
      let rated;
      let percentage = Math.floor(Math.random() * 28) + 72;

      if (percentage >= 80) {
        rated = 'Very Positive';
      } else {
        rated = 'Mostly Positive';
      }

      let fakeReview = {
        game_id: i,
        top_review: faker.lorem.paragraph(),
        percent: percentage.toString() + '%',
        quantity: faker.random.number(),
        rating: rated,
        source: 'Steam'
      }
      reviews.push(fakeReview);
    }
    reviewsCollection.insertMany(reviews)
    .then(res => {
      console.log(`DB successfully seeded with ${res.result.n} entries!`);
      _client.close();
    })
  })
  .catch(err => {
    console.log('Unsuccessful seeding!:', err);
    _client.close();
  });
