/** @format */

import React, { useEffect, useState } from "react";
import { Box, List, ListItem } from "@mui/material";

import User from "./User";

const ListUsers = () => {
  // const users = [
  //   {
  //     _id: "1",
  //     name: "John Doe",
  //     email: "john@email.com",
  //     phoneNum: "1231231234",
  //     address: "1234 Main St, City, State 12345",
  //   },
  //   {
  //     _id: "2",
  //     name: "John Doe",
  //     email: "john@email.com",
  //     phoneNum: "1231231234",
  //     address: "1234 Main St, City, State 12345",
  //   },
  //   {
  //     _id: "3",
  //     name: "John Doe",
  //     email: "john@email.com",
  //     phoneNum: "",
  //     address: "1234 Main St, City, State 12345",
  //   },
  //   {
  //     _id: "5",
  //     name: "John Doe",
  //     email: "john@email.com",
  //     phoneNum: "1231231234",
  //   },
  // ];

  const [users, setUsers] = useState([]);

  // Get all users
  const getUsers = async () => {
    console.log("getUsers ...");

    const data = await fetch(
      "https://lh0w88f5h4.execute-api.ca-central-1.amazonaws.com/dev/id"
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setUsers(data);
  };

  // on mount, fetch all users
  useEffect(() => {
    // fetch all users
    getUsers();
  }, []);

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <List>
        {/* Users */}
        {users.map((value) => (
          <ListItem divider key={value._id}>
            <User {...value} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListUsers;
