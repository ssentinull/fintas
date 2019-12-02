const MongoClient = require("mongodb").MongoClient;

let _db;

const mongoConnection = callback => {
  MongoClient.connect(
    process.env.CLOUD_DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, client) {
      _db = client.db("raspi-attendance-system");
      return callback(err);
    }
  );
};

const getDb = () => _db;

module.exports = { mongoConnection, getDb };
