"use client";
import { removeUser } from "@/app/redux/slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function DisplayUser() {
  const userData = useSelector((data) => data.users);
  const dispatch = useDispatch();
  return (
    <div className="display-user">
      <h3>User List</h3>
      {
        userData.map((item) => {
          return (
            <div className="user-item">
              <span>{item.name}</span>
              <button className="delete-btn" onClick={() => dispatch(removeUser(item.id))}>Remove</button>
              
            </div>
          )
        })
      }
    </div>
  );
}

export default DisplayUser;
