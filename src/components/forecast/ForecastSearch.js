import React, { useState, useContext } from 'react';
import WeatherContext from '../context/weatherApi/weatherContext';
import AlertContext from '../context/alert/alertContext';

const ForecastSearch = () => {
  const weatherContext = useContext(WeatherContext);
  const { cityForecast, cityForecastData, clearForecast } = weatherContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter City Name', 'alert-danger');
    } else {
      cityForecast(text);
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="text"
            id="text"
            className="form-control"
            placeholder="Enter City Name..."
            value={text}
            onChange={onChange}
          />
        </div>
        <div className="form-group text-center">
          <input
            type="submit"
            value="SEARCH"
            className="btn btn-block btn-dark"
          />
        </div>
      </form>
      {cityForecastData !== null && (
        <button
          className="btn btn-block btn-primary"
          onClick={() => clearForecast()}
        >
          CLEAR
        </button>
      )}
    </div>
  );
};

export default ForecastSearch;
