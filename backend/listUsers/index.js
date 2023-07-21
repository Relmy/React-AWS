/** 
 * ListUsers Lambda function
 * 
 * @param {Object} event - Lambda Event
 * @param {Object} context - Lambda Context
 * 
 */

// const mongoose = require('mongoose');
// const MONGODB_URI = 'mongodb+srv://admin:L$Bg@bp-sde1.nqxtbfg.mongodb.net/?retryWrites=true&w=majority';

// const userSchema = new mongoose.Schema({
//   _id: mongoose.SchemaTypes.ObjectId,
//   name: String,
//   email: String,
//   phoneNum: String,
//   address: String
// });


exports.handler = async (event, context) => {

  //const db = await mongoose.createConnection(MONGODB_URI);
  const users = [
    {
      _id: "1",
      name: "John Doe",
      email: "john@email.com",
      phoneNum: "1231231234",
      address: "1234 Main St, City, State 12345",
    },
    {
      _id: "2",
      name: "John Doe",
      email: "john@email.com",
      phoneNum: "1231231234",
      address: "1234 Main St, City, State 12345",
    },
    {
      _id: "3",
      name: "John Doe",
      email: "john@email.com",
      phoneNum: "",
      address: "1234 Main St, City, State 12345",
    },
    {
      _id: "5",
      name: "John Doe",
      email: "john@email.com",
      phoneNum: "1231231234",
    },
  ];

  //const UsersModel = db.model('users', userSchema);
  // Return singe user if id is given or all users
  if (event.queryStringParameters && event.queryStringParameters.id) {
    const _id = event.queryStringParameters.id

    const user = users.find(user => user._id === _id)
    // const user = await UsersModel.find({ _id: id });
    // await mongoose.disconnect();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(user),
    }
  } else {
    // const users = await UsersModel.find();

    // await mongoose.disconnect();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(users),
    }
  }
};

