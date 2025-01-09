import React from "react";

const ButtonComponent = (props) => {
  let class_name = `${props.cusClass} fw-bold`;
  if (props.showNavigation === true) {
    return (
      <div className={class_name}>
        # {props.content} {">>>"}
      </div>
    );
  } else {
    return <div className={class_name}># {props.content}</div>;
  }
};

export default ButtonComponent;

// {} - document.getElementId("lll")
