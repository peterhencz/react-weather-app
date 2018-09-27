import React from "react";
import "../styles/input.scss";

const Input = ({ name, placeholder, value }) => (
  <input type="text" name={name} placeholder={placeholder} value={value} />
);

export default Input;
