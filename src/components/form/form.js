import React from "react";
import Button from "../Button/Button";
import Input from "../input/input";
import "./form.scss";

const Form = ({getWeather}) => (
  <form onSubmit={getWeather}>
    <Input name="city" placeholder="City..." />
    <Input name="country" placeholder="Country..." />
    <Button title="🌤"/>
  </form>
);

export default Form;
