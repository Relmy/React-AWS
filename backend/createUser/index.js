/** 
 * Lambda function to connect to the database
 */
const mongoose = require('mongoose');

let conn = null;

const uri = process.env.MONGODB_URI //|| 'mongodb://localhost:27017/test;

const users = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    phoneNum: String,
    address: String,
});

exports.handler = async function(event, context) {
  // Make sure to add this so you can re-use `conn` between function calls.
  // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  context.callbackWaitsForEmptyEventLoop = false;

  // Because `conn` is in the global scope, Lambda may retain it between
  // function calls thanks to `callbackWaitsForEmptyEventLoop`.
  // This means your Lambda function doesn't have to go through the
  // potentially expensive process of connecting to MongoDB every time.
  if (conn == null) {
    conn = mongoose.createConnection(uri, {
      // and tell the MongoDB driver to not wait more than 5 seconds
      // before erroring out if it isn't connected
      serverSelectionTimeoutMS: 5000
    });

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn.asPromise();
    conn.model('Test', new mongoose.Schema({ name: String }));
  }
  

  const M = conn.model('Test');

  const doc = await M.findOne();
  console.log(doc);

  return doc;
};