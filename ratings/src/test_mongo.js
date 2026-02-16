const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://ratings:ratings123@db:27017/ratings?authSource=ratings';

console.log("Testing connection to: " + url);

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) {
        console.error("Connection failed:");
        console.error(err);
    } else {
        console.log("Connected successfully to MongoDB!");
        client.close();
    }
});
