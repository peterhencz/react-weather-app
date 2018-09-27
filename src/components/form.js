import React from "react";
import Button from "./button";
import Input from "./input";
import "../styles/form.scss";

const Form = ({getWeather}) => (
  <form onSubmit={getWeather}>
    <Input name="city" placeholder="City..." />
    <Input name="country" placeholder="Country..." />
    <Button title="🌤"/>
  </form>
);

export default Form;
