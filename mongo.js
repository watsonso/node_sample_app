var MongoClient = require('mongodb').MongoClient,
	settings = require('./settings');
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, client) {
	if (err) { return console.dir(err); }
	console.log("connected to db");
	const db = client.db('nodedb');
	db.collection("users", function(err, collection) {
		var docs = [
			{name: "taguchi", score: 40},
			{name: "suzuki", score: 80},
			{name: "kaneko", score: 90}
		];
		collection.find().toArray(function(err, items) {
			console.log(items);
		});
	});
});
