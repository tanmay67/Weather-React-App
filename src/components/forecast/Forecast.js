import React from 'react';
import ForecastSearch from './ForecastSearch';
import ForecastInfo from './ForecastInfo';

const Forecast = () => {
  return (
    <div>
      <h1 className="text-center">Forecast For Next 3 Days</h1>
      <div className="my-2">
        <ForecastSearch />
      </div>
      <div className="my-2">
        <ForecastInfo />
      </div>
    </div>
  );
};

export default Forecast;
