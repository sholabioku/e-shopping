const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = cb => {
  MongoClient.connect(
    'mongodb://localhost:27017/NodeComplete',
    { useUnifiedTopology: true }
  )
    .then(client => {
      console.log('Mongodb connected...');
      cb(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
