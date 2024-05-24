import React, { useEffect, useState } from "react";

//display mutiple users
//only username
//click profile functionality for more information
//right handside

export default function useGetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return users;
}
