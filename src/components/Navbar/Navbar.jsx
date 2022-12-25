import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import ShowUsers from "../Users/ShowUsers";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Making an API call
  async function getUsers() {
    setIsLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
    setIsLoading(false);
  }

  return (
    <div>
      <ul>
        <li>Brand</li>
        <li className={styles.active} onClick={getUsers}>
          GetUsers
        </li>
      </ul>

      {/* Loader */}
      {isLoading ? <Loader /> : null}

      {/* User Section : Show the users if available else show text*/}

      {users.length > 0 ? (
        <ShowUsers users={users} />
      ) : (
        <div className={styles.text}>Click On GetUsers</div>
      )}
    </div>
  );
};

export default Navbar;
