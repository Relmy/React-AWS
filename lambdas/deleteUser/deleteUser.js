/** 
 * Lambda function that deletes a user.
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

    // Delete a user
    try {
        const deletedUser = await db.collection("users").deleteOne(event.body);
        const response = {
            statusCode: 200,
            body: JSON.stringify(deletedUser),
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