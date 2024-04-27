import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj1 = {
    userName : "Kareena Kapoor",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    buttonText:"View INSTA",
    userImage : "https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  let myObj2 = {
    userName : "Katrina Kaif",
    desc : "Lorem ipsum dolor sit JQuery consectetur Contetnt elit. Extra, debitis?",
    buttonText:"View FACEBOOK",
    userImage : "https://images.pexels.com/photos/21287205/pexels-photo-21287205/free-photo-of-blonde-woman-sitting-backwards-on-wooden-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  let myObj3 = {
    userName : "Kajol",
    desc : "Lorem Java dolor sit Next JS consectetur Android elit. Excepturi, Developer?",
    buttonText:"View X",
    userImage : "https://images.pexels.com/photos/21358065/pexels-photo-21358065/free-photo-of-model-dressed-in-white-wearing-a-blazer-tied-with-a-rope.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-xl mb-4">
        Hello Tailwind
      </h1>
      <Card someObj = {myObj1}/>
      <Card someObj = {myObj2}/>
      <Card someObj = {myObj3}/>

      
    </>
  );
}

export default App;
