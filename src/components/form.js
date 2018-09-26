import React from "react";
import Button from "./button"

const Form = ({getWeather}) => (
  <form onSubmit={getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country.."/>
    <Button title="Get weather"/>
  </form>
);

export default Form;