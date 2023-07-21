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

  if (!event.body) {
    return {
      statusCode: 400,
      body: "invalid request, you are missing the parameter body",
    };
  }

  const body = JSON.parse(event.body)
  // If POST request, create new user
  if (event.httpMethod === "POST") {
    // Get new user data from request body
    const newUser = body
    // Add new user 
    users.push(newUser)
    // insertOne(newUser)
  } 
  if (event.httpMethod === "PUT") {
    // Get updated user data from request body
    const _id = body._id
    const updatedUser = body

    // Find user by id 
    const user = users.find(user => user._id === _id)

    users.pop(user)
    users.push(updatedUser)

    // .updateOne({ _id: id }, { $set: updatedUser })

  }

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body),
  }

  return response;
};

