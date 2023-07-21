/** 
 * ListUsers Lambda function
 * 
 * @param {Object} event - Lambda Event
 * @param {Object} context - Lambda Context
 * 
 */

exports.handler = async (event, context) => {

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

  // Return singe user if id is given or all users
  if (event.queryStringParameters && event.queryStringParameters.id) {
    const _id = event.queryStringParameters.id
    console.log("User id: ", _id)
    const user = users.find(user => user._id === _id)
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(user),
    }
  } else {
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

