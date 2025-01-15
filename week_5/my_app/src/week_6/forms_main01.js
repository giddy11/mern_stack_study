import React, { useState } from "react";
import img_one from "../assets/good_Lp.jpg";
import { signup } from "./forms_js";

/**
 * The first thing to note that when the user types, its not updating the state or
 * the variable is not reflecting in the view.
 * 
 * Also as am typing, its meant to go and update the current state of fullname
 * 
 * For us to track when there is a change, we need to manage when there is a change in the
 * state
 * 
 * what js event helps us track when there is a change in the input? onChanged
 * 
 * So there is a react library or function that helps to manage changes which is useState
 * 
 * 
 */

export default function Forms_main01() {
  const fullname = ""; //gideon which is an initial value
  const email = "";
  const password = "";

  //to keep track of the change
   const fullnameChange=""
  const emailChange=""
  const passwordChange=""

  const [fullname1, setFullname1] = useState("")
  const [email1, setEmail1] = useState("")
  const [password1, setPassword1] = useState("")

  return (
    <div>
      <div className="style-one">
        <img className="imgone" alt="Engineers" src={img_one} />
        <img
          className="imgone"
          alt="Engineers"
          src={require("../assets/good_Lp.jpg")}
        />
        <h1>Sign Up</h1>
        <label for="fullname">Fullname</label>
        <br></br> <br></br>
        {/* <input id="fullname" placeholder="enter value" value={fullname} onChange={(e) => alert(e)}/> */}
        {/* <input id="fullname" placeholder="enter value" value={fullname} onChange={(e) => console.log(e)}/> */}
        {/* <input id="fullname" placeholder="enter value" value={fullname} onChange={(e) => console.log(e.target.value)}/> */}
        {/* <input id="fullname" placeholder="enter value" value={fullname1} onChange={(e) => console.log(e.target.value)}/> */}
        <input id="fullname" placeholder="enter value" value={fullname1} onChange={(e) => setFullname1(e.target.value)}/>
        <br></br>
        <br></br>
        <label for="email">Email</label>
        <br></br> <br></br>
        {/* <input id="email" placeholder="enter value" value={email}/> */}
        {/* <input id="email" placeholder="enter value" value={email1}/> */}
        <input id="email" placeholder="enter value" value={email1} onChange={(e) => setEmail1(e.target.value)}/>
        <br></br>
        <br></br>
        <label for="password">Password</label>
        <br></br>
        <br></br>
        {/* <input type="password" placeholder="enter value" id="password" value={password}/> */}
        {/* <input type="password" placeholder="enter value" id="password" value={password1}/> */}
        <input type="password" placeholder="enter value" id="password" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
        <br></br>
        <br></br>
        <button onClick={() => signup(fullname1, email1, password1)}>Sign Up</button>
        <button>Send Note to Login</button>
        <br></br>
        <br></br>
        <p id="result1">-----Result------</p>
      </div>
      {/* <div className="style-two">
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
        </div> */}

      {/* <div>
          
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
        </div> */}
      {/* {showLoader ? <p className="loading-tag">Loading...</p> : ""} */}
    </div>
  );
}
