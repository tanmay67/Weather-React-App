import {
  GET_CITY,
  SET_LOADING,
  GET_CITY_FORECAST,
  CLEAR_CITY,
  CLEAR_FORECAST,
} from '../Types';
import axios from 'axios';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';

import React, { useReducer } from 'react';

const WeatherState = (props) => {
  const initialState = {
    city: null,
    loading: false,
    cityForecastData: null,
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  //functions (actions)
  const getCity = async (city) => {
    loading();
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=1d1ce06516914f16b7961433201808&q=${city}`
    );
    dispatch({
      type: GET_CITY,
      payload: res.data,
    });
  };

  const cityForecast = async (city) => {
    loading();
    const res = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=1d1ce06516914f16b7961433201808&q=${city}&days=7`
    );
    dispatch({
      type: GET_CITY_FORECAST,
      payload: res.data,
    });
  };

  const clearCity = () => {
    dispatch({
      type: CLEAR_CITY,
    });
  };

  const clearForecast = () => {
    dispatch({
      type: CLEAR_FORECAST,
    });
  };

  const loading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        city: state.city,
        loading: state.loading,
        cityForecastData: state.cityForecastData,
        getCity,
        cityForecast,
        clearCity,
        clearForecast,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
