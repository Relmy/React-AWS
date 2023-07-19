/**
 * This is a simple example of a lambda function that reads data from a MongoDB database.
 * 
 * This function is triggered by an HTTP request that is sent to the API Gateway endpoint that is created when you deploy this stack.
 */

// Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;

// Define our connection string. Info on where to get this will be described below. In a real world application you'd want to get this string from a key vault like AWS Key Management, but for brevity, we'll hardcode it in our serverless function here.
const MONGODB_URI = process.env.MONGODB_URI;

// Once we connect to the database once, we'll store that connection and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;

/**
 * Connect to our MongoDB database hosted on MongoDB Atlas
 * 
 * @returns {Promise} Returns a promise that resolves to a MongoDB client object
 */
async function connectToDatabase() {
    // If the database connection is cached return it
    if (cachedDb) {
        return cachedDb;
    }

    // Connect to our MongoDB database
    const client = await MongoClient.connect(MONGODB_URI);
    // Specify which database we want to use
    const db = await client.db("bp-sde-users");

    cachedDb = db;
    return db;
}

exports.handler = async (event, context) => {
    console.log("readUser => handler");
    /* By default, the callback waits until the runtime event loop is empty before freezing the process and returning the results to the caller. 
    Setting this property to false requests that AWS Lambda freeze the process soon after the callback is invoked, even if there are events in the event loop. 
    AWS Lambda will freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop are processed when the Lambda 
    function is next invoked, if AWS Lambda chooses to use the frozen process. */
    context.callbackWaitsForEmptyEventLoop = false;

    // // Get an instance of our database
    // const db = await connectToDatabase();

    // // Make a MongoDB MQL Query to go into the users collection and return all users
    // const users = await db.collection("users").find()//.toArray();
    // console.log("readUser => handler => users: ", users);
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify(users),
    // };

    // return response;

    // Connect to the MongoDB cluster
    try {
        const db = await connectToDatabase();

        try {
            const users = await db.collection("users").find();
            const response = {
                statusCode: 200,
                body: JSON.stringify(users),
            };
            // return status: 200 -> successful http request and an array of postMessages
        }
        catch (error) {
            const response = {
                statusCode: error.statusCode || 404,
                body: JSON.stringify({ error: error.message || error.toString() }),
            };
        }
        return response;
    } catch (error) {
        const response = {
            statusCode: error.statusCode || 500,
            body: JSON.stringify({ error: error.message || error.toString() }),
        };
        return response;
    }





};