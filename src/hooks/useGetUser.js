import { useState, useEffect } from "react";

export default function useGetUser(id) {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        const data = await response.json();
        setUserData(data[0]);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    const user = users.find((user) => user?.id === id);
    console.log(users);
    if (user) return;
    fetchData();
  }, [id]);

  useEffect(() => {
    setUsers([...users, userData]);
  }, [userData]);

  return [userData, users];
}
