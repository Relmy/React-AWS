const { MongoClient, ObjectId } = require('mongodb');
const URI = "mongodb+srv://admin:L$Bg@bp-sde1.nqxtbfg.mongodb.net/?retryWrites=true&w=majority"

let cachedConn = null;

exports.handler = async (event) => {

  if (!cachedConn) {
    cachedConn = MongoClient.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  const client = await cachedConn;
  let docs, data;

  // Find user by id
  if (event.queryStringParameters && event.queryStringParameters.id) {
    const id = event.queryStringParameters.id;
    data = await client.db().collection("users").findOne({ _id: ObjectId(id) });
  }
  else {
    // Find all users
    docs = client.db().collection("users").find();
    data = [];
    await docs.forEach(user => data.push(user));
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };

};