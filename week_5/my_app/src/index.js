import React from "react";
// All React tools to help develop a React based application
import ReactDOM from "react-dom/client";
// The tools needed to interact between reactjs and native web dev (HTML, CSS & JS)
import "./index.css";
import Header from "./test/function_components/header";
import ButtonComponent from "./test/function_components/button";
import Buttoncomp from "./test/react_components/button_component";

let printOnConsoleOne = () => {
  alert("Button Clicked 1");
};
let printOnConsoleTwo = () => {
  alert("Button Clicked 2");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header></Header>
      <ButtonComponent
        content="Open Account"
        cusClass="classone"
        showNavigation={true}
      />
      <ButtonComponent
        content="Close Account"
        cusClass="classtwo"
        showNavigation={false}
      />
      <ButtonComponent
        content="Hide Account"
        cusClass="classthree"
        showNavigation={true}
      />

      <Buttoncomp
        header="Header One"
        subcontent="This is Comp Content"
        funcHandler={() => printOnConsoleOne()}
      ></Buttoncomp>
      <Buttoncomp header="Header Two" subcontent="...." funcHandler={() => printOnConsoleTwo()} ></Buttoncomp>

      {/* <div>
        <h1>Header One</h1>
        <p>This is Comp Content</p>
        <button onClick={() => printOnConsoleOne()}>Show Alert</button>
      </div>

      <div>
        <h1>Header Two</h1>
        <p>...</p>
        <button onClick={() => printOnConsoleTwo()}>Show Alert</button>
      </div> */}
      
    </div>
  </React.StrictMode>
);
// Function - JSX
// Why JS
// 1. Componentization (Component Based Architecture)
//    the ability to break down ur code into components
//1b one component with different dynamic features
// 2. Routing & Navigation
// 3. State Management:
//    whos currently loggd in. also loader effect

//Types of Components
//1. Function Based Component (rfc) - When you have any javascript operations
//2. React Based Component (rcc) - When you don't have JS operations

// Props - Properties of Components
