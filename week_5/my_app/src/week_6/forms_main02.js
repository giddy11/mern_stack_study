import React, { useState } from "react";
import img_one from "../assets/good_Lp.jpg";
import { login, signup } from "./forms_js";

/**
 * SO what if we have plenty informations that needs to be captured in the code.
 * 
 * The sPread means performs this functions for all the keys in the variable
 * OR set of values in the variable
 * SO for all the set of values inside login details, look for the name of that 
 * inut and the value of the input and bind them together
 *
 */

export default function Forms_main02() {
  const [fullname1, setFullname1] = useState("");
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");

  //Login
  // loginDetails - email & password
  const [loginDetails, setLoginDetails] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const updateChangesHandler = (e) => {
    // setLoginDetails({...loginDetails, [e.target.name]: e.target.value})
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

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
        <input
          id="fullname"
          placeholder="enter value"
          value={fullname1}
          onChange={(e) => setFullname1(e.target.value)}
        />
        <br></br>
        <br></br>
        <label for="email">Email</label>
        <br></br> <br></br>
        <input
          id="email"
          placeholder="enter value"
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
        />
        <br></br>
        <br></br>
        <label for="password">Password</label>
        <br></br>
        <br></br>
        <input
          type="password"
          placeholder="enter value"
          id="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <br></br>
        <br></br>
        <button onClick={() => signup(fullname1, email1, password1)}>
          Sign Up
        </button>
        <button>Send Note to Login</button>
        <br></br>
        <br></br>
        <p id="result1">-----Result------</p>
      </div>

      <div className="style-two">
        <h1>Login</h1>
        <label for="email2">Email</label>
        <br></br> <br></br>
        <input id="email2" name="email" placeholder="enter value" onChange={updateChangesHandler}/>
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
        <br></br>
        <br></br>
        <button onClick={() => login(loginDetails.email, loginDetails.password)}>Login</button>
        <button>Login Event</button>
        <br></br>
        <br></br>
        <p id="result2">result</p>
      </div>

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
