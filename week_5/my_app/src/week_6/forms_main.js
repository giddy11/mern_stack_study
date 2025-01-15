import React, { useState, useEffect } from "react";
import * as Auth from "./forms_js";
import * as UserService from '../services/userService'
import store from "../services/store";
import ChildContextOne from "./child_context_one";
// import img_one from "../assets/img1.jpg"

const FormsMain = () => {
  // const firstName=""
  // const email=""
  // const password=""

  // const firstNameChange=""
  // const emailChange=""
  // const passwordChange=""
  const [users, usersChanged] = useState([]);

  const [loginNote, loginNoteChanged] = useState("This is a note");
  const [lastName, LastNameChanged] = useState("");
  const [firstName, firstNameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [showLoader, showLoaderChanged] = useState(false);
  // Manage Changes - useState()

  //Login
  // loginDetails - email & password
  const [loginDetails, loginDetailsChanged] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const updateChangesHandler = (e) => {
    loginDetailsChanged({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const SendNoteAction = () => {
    store.dispatch({
      type: "LoginNote",
    });
  };
  //It is called everytime there is a change in the reducer
  store.subscribe(() => {
    var currentChanges = store.getState();
    loginNoteChanged(currentChanges.loginNote);
    showLoaderChanged(currentChanges.isLoadingApp);
  });
  const loginEvent = () => {
    store.dispatch({
      type: "loadingPage",
    });
    setTimeout(() => {
      store.dispatch({
        type: "stopLoadingPage",
      });
    }, 3000);
  };
  useEffect(()=>{
    const fetchUsers=async ()=>{
      const usersResponse=await UserService.fetchUsers()
      usersChanged(usersResponse)
    }
    fetchUsers()
  },[users])
  return (
    <div>
      <div className="style-one">
        {/* <img className="imgone" alt="Engineers" src={img_one}/> */}
        <img
          className="imgone"
          alt="Engineers"
          src={require("../assets/img1.jpg")}
        />
        <h1>Sign Up</h1>
        <label for="firstName">FirstName</label>
        <br></br> <br></br>
        <input
          id="firstName"
          placeholder="enter value"
          value={firstName}
          onChange={(e) => firstNameChange(e.target.value)}
        />
        <br></br>
        <br></br>
        <label for="lastName">LastName</label>
        <br></br> <br></br>
        <input
          id="lastName"
          placeholder="enter value"
          value={lastName}
          onChange={(e) => LastNameChanged(e.target.value)}
        />
        <br></br>
        <br></br>
        <label for="email">Email</label>
        <br></br> <br></br>
        <input
          id="email"
          placeholder="enter value"
          value={email}
          onChange={(e) => emailChange(e.target.value)}
        />
        <br></br>
        <br></br>
        <label for="password">Password</label>
        <br></br>
        <br></br>
        <input
          id="password"
          placeholder="enter value"
          type="password"
          value={password}
          onChange={(e) => passwordChange(e.target.value)}
        />
        <br></br>
        <br></br>
        <button onClick={() => UserService.createUser2({
          firstName:firstName,lastName:lastName, email:email,password:password
        })}>
          Sign Up
        </button>
        <button onClick={() => SendNoteAction()}>Send Note to Login</button>
        <br></br>
        <br></br>
        <p id="result1">-----Result------</p>
      </div>
      <div className="style-two">
        <h1>Login</h1>
        <label for="email2">Email</label>
        <br></br> <br></br>
        <input
          id="email2"
          name="Email"
          placeholder="enter value"
          onChange={updateChangesHandler}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label for="password2">Password</label>
        <br></br>
        <br></br>
        <input
          id="password2"
          placeholder="enter value"
          type="password"
          name="password"
          onChange={updateChangesHandler}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label for="password2">New Input</label>
        <br></br>
        <br></br>
        <input
          id="password2"
          placeholder="enter value"
          name="newinput"
          onChange={updateChangesHandler}
          type="checkbox"
        />
        <br></br>
        <br></br>
        <button onClick={() => UserService.loginUser2(loginDetails.Email,loginDetails.password)}>Login</button>
        <button onClick={() => loginEvent()}>Login Event</button>
        <br></br>
        <br></br>
        <p id="result2">{loginNote}</p>
      </div>
      <div>
        
        <table className="table">
          <th>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Email</td>
          </th>
          {
            users.map(e=>{
              return (<tr>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
              </tr>)
            })
          }
        </table>
      </div>
      {showLoader ? <p className="loading-tag">Loading...</p> : ""}
    </div>
  );
};

export default FormsMain;
