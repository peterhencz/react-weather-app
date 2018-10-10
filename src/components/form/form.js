import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { connect } from 'react-redux';
import { addWeather } from '../../actions/actions';
import "./form.scss";

const Form = ({addWeather}) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    addWeather(city, country);
  }}>
    <Input name="city" placeholder="City..." />
    <Input name="country" placeholder="Country..." />
    <Button title="🌤" />
  </form>
);

const mapStateToProps = store => ({
  defaultCity: store.weatherReducer.defaultCity
 })

const mapDispatchToProps = { addWeather }

export default connect(mapStateToProps, mapDispatchToProps)(Form);
