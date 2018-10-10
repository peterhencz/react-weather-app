import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { connect } from 'react-redux';
import { addWeather } from '../../actions/actions';
import "./form.scss";

const Form = ({getWeather, defaultCity}) => (
  <form onSubmit={getWeather}>
    <Input name="city" placeholder="City..." value={defaultCity}/>
    <Input name="country" placeholder="Country..." />
    <Button title="🌤"/>
  </form>
);

const mapStateToProps = store => ({
  defaultCity: store.weatherReducer.defaultCity
 })

const mapDispatchToProps = dispatch => ({
  addWeather: () => dispatch(addWeather())
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
