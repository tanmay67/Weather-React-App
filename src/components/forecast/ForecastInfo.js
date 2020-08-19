import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import WeatherContext from '../context/weatherApi/weatherContext';
import Spinner from '../layouts/Spinner';

const ForecastInfo = () => {
  const weatherContext = useContext(WeatherContext);
  const { cityForecastData, loading } = weatherContext;

  return (
    <div className="my-3">
      {cityForecastData !== null && (
        <div>
          <h1 className="text-center">{cityForecastData.location.name}</h1>
          <Carousel>
            {cityForecastData !== null &&
              cityForecastData.forecast.forecastday.map((item, i) => (
                <Carousel.Item key={i} style={{ height: '360px' }}>
                  <Carousel.Caption>
                    <img
                      src={item.day.condition.icon}
                      alt={item.day.condition.text}
                    />
                    <p>{item.day.condition.text}</p>
                    <p>
                      <span className="badge badge-primary">Date</span>{' '}
                      {item.date}
                    </p>
                    <p>
                      <span className="badge badge-warning">Sunrise</span>{' '}
                      {item.astro.sunrise}
                    </p>
                    <p>
                      <span className="badge badge-dark">Sunset</span>{' '}
                      {item.astro.sunset}
                    </p>
                    <p>
                      <span className="badge badge-light">Moonrise</span>{' '}
                      {item.astro.moonrise}
                    </p>
                    <p>
                      <span className="badge badge-success">Moonset</span>{' '}
                      {item.astro.moonset}
                    </p>
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      )}
      {cityForecastData === null && loading && <Spinner />}
    </div>
  );
};

export default ForecastInfo;
