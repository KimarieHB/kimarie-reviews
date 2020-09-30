 const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/reviews', {
   autoIndex: false,
   dbName: 'reviews',
   useNewUrlParser: true,
   useUnifiedTopology: true
  }).then(() => {
    console.log('Mongoose to Mongo connection established!');
  }).catch((error) => {
    console.log(error);
  })

// const Schema = mongoose.Schema;
// const Review = mongoose.model('review',
//   new Schema({
//     game_id: { type: Number, unique: true },
//     review: [{
//       top_review: String,
//       percent: String,
//       review_quantity: Number,
//       general_rank: String,
//       source: String
//     }]
//   }), 'reviews');
