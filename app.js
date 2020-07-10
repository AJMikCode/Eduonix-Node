const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    const col = db.collection('bruh');

// Insert a single document
    //db.collection('goyotoyo').insertOne({ name:"Xander", age: 16, Hobby: "Video Games" }, function (err, r) {
     //   assert.equal(null, err);
     //   assert.equal(1, r.insertedCount);

//Insert Multiples Documents
   col.insertMany([{Character: "Hibana"}, {Character: "Echo"}, {Character: "Lesion"}, { Character: "Mira" }], function (err, r) {
        assert.equal(null, err);
        assert.equal(4, r.insertedCount);

        //console.log("Inserted " + r.ops.length + " documents");
       // console.log(r);
        //Gets first two documents that match the query
//Finds everythings in database, can be specified with curly braces
        //col.find().toArray(function (err, docs) {
          //  assert.equal(null, err);
           // assert.equal(36, docs.length);

           // console.log(docs);
       col.updateOne({ Character: "Hibana" }, { $set: { Character: "Jackal" } }, function (err, r) {
           assert.equal(null, err);
           assert.equal(1, r.matchedCount);
           assert.equal(1, r.modifiedCount);
//Deletes One document inside Database
          // col.deleteOne({ Character: "Echo" }, function (err, r) {
           //    assert.equal(null, err);
             //  assert.equal(1, r.deletedCount);
           col.deleteMany({ Character: "Jackal", Character: "Mira"  }, function (err, r) {
               assert.equal(null, err);
               assert.equal(3, r.deletedCount);


               client.close();
                });
           });
       });
   });
//});
//Updates Documents


