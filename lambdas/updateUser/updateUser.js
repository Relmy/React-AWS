/** 
 * Lambda function that creates a new user.
 * 
 * Insert a new user into MongoDB.
 * 
 * @param   {object} event      - Lambda event object
 * @param   {object} context    - Lambda context object
 * @returns {object} object     - Lambda response object
 */

const { MongoClient } = require("mongodb");
const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb = null;

exports.handler = async (event, context) => {
    // Connect to the MongoDB cluster if not already connected
    if (cachedDb == null) {
        const client = await MongoClient.connect(MONGODB_URI);
        const db = client.db("bp-sde-users");
        cachedDb = db;
    }

    // Insert a new user into MongoDB
    try {
        //Find and update a user
        const user = await db.collection("users").find(event.body);
        const response = {
            statusCode: 200,
            body: JSON.stringify(user),
        };
        return response;
    } catch (error) {
        const response = {
            statusCode: error.statusCode || 404,
            body: JSON.stringify({ error: error.message || error.toString() }),
        };
        return response;
    }

};