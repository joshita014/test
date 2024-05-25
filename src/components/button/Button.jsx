import React from "react";

const Button = (props) => {
  return <button className={`${props.clName}`}>{props.name}</button>;
};

export default Button;
