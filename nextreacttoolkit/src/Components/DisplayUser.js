"use client";
import React from "react";
import { useSelector } from "react-redux";

function DisplayUser() {
  const userData = useSelector((data) => data.users);
  console.log(userData);
  return (
    <div className="display-user">
      <h3>User List</h3>
      {
        userData.map((item) => {
          return (
            <p key={item.id} className="user-item">{item.name}</p>
          )
        })
      }
    </div>
  );
}

export default DisplayUser;
