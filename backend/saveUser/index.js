/** 
 * saveUser Lambda function
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

  // If POST request, create new user
  if (event.httpMethod === "POST") {
    // Get new user data from request body
    const newUser = JSON.parse(event.body)
    console.log("New user: ", newUser)
  } 
  if (event.httpMethod === "PUT") {
    // Get updated user data from request body
    const updatedUser = JSON.parse(event.body)
    console.log("Updated user: ", updatedUser)

    // Find user in users array
    const user = users.find(user => user._id === _id)

  }

  response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(user),
  }

  return response;
};

