import React from "react";
import ButtonPropertyComp from "../../components/buttonPropertyComp";

export default function ButtonProperty() {
  let printOnConsoleOne = () => {
    alert("Button Clicked 1");
  };

  let printOnConsoleTwo = () => {
    alert("Button Clicked 2");
  };
  return (
    <div>
      <ButtonPropertyComp header="Header One" subContent = "This is Comp content 1" funcHandler = {printOnConsoleOne}/>

      <ButtonPropertyComp header="Header Two" subContent = "This is Comp content 2" funcHandler = {printOnConsoleTwo}/>


      {/* <div>
        <h1>Header One</h1>
        <p>This is Comp content 1</p>
        <button onClick={printOnConsoleOne}>Show Alert</button>
      </div>

      <div>
        <h1>Header Two</h1>
        <p>This is Comp content 2</p>
        <button onClick={printOnConsoleTwo}>Show Alert</button>
      </div> */}
    </div>
  );
}
