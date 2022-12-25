import React from "react";
import styles from './ShowUsers.module.css'

const ShowUsers = (props) => {
    // mapping Each User 
  const items = props.users.map((user) => {
    return (
      <div className={styles.card} key={user.id}>
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <h1>{`${user.first_name} ${user.last_name}`}</h1>
        <p>{user.email}</p>
      </div>
    );
  });
  
  return (
    <div className={styles.container} >
      {items}
    </div>
  );
};

export default ShowUsers;
