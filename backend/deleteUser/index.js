/** 
 * DeleteUser Lambda function
 * 
 * @param {Object} event - Lambda Event with user id in event.body
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

  // User id is given, delete user
  if (event.body && event.body.id) {
    const _id = event.queryStringParameters.id

    // Delete user by id
    const user = users.find(user => user._id === _id)
    const deletedUser = users.pop(user)
    // const deletedUser = await UsersModel.deleteOne({ _id: id });
    // await mongoose.disconnect();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(deletedUser),
    }

  } else {
    // const users = await UsersModel.find();

    // await mongoose.disconnect();
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: "User not found",
    }
  }


};

