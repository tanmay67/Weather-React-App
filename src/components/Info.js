import React, { useContext, Fragment } from 'react';
import WeatherContext from './context/weatherApi/weatherContext';
import Spinner from './layouts/Spinner';

const Info = () => {
  const weatherContext = useContext(WeatherContext);
  const { city, loading } = weatherContext;

  return (
    <div className="my-3">
      {city !== null && !loading && (
        <div className="text-center card text-light">
          {city.location && (
            <Fragment>
              <div className="card-header">
                <h1>{city.location.name}</h1>
              </div>
              <div className="card-body">
                <img
                  className="img-fluid"
                  style={{ width: '100px', height: '100px', margin: 'auto' }}
                  src={city.current.condition.icon}
                  alt={city.current.condition.text}
                />
                <h3>{city.current.condition.text}</h3>
                <hr />

                <table class="table table-borderless p-0 m-0">
                  <tbody>
                    <tr>
                      <th scope="row" className="text-success">
                        Country
                      </th>
                      <td className="text-light">{city.location.country}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-primary">
                        Local Time
                      </th>
                      <td className="text-light">{city.location.localtime}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-danger">
                        Last Updated
                      </th>
                      <td className="text-light">
                        {city.current.last_updated}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-warning">
                        Temperature (Celcuis)
                      </th>
                      <td className="text-light">{city.current.temp_c}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-danger">
                        Temperature (Fahrenheit)
                      </th>
                      <td className="text-light">{city.current.temp_f}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-info">
                        Humidity
                      </th>
                      <td className="text-light">{city.current.humidity}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-warning">
                        UV Rays
                      </th>
                      <td className="text-light">{city.current.uv}</td>
                    </tr>
                  </tbody>
                </table>

                {/* <h5>
                  <span className="badge badge-success">Country</span>{' '}
                  {city.location.country}
                </h5>
                <h5>
                  <span className="badge badge-primary">Local Time</span>{' '}
                  {city.location.localtime}
                </h5>
                <h5>
                  <span className="badge badge-secondary">Last Updated</span>{' '}
                  {city.current.last_updated}
                </h5>
                <h5>
                  <span className="badge badge-warning">
                    Temperature (Celcuis)
                  </span>{' '}
                  {city.current.temp_c}
                </h5>
                <h5>
                  <span className="badge badge-info">
                    Temperature (Fahrenheit)
                  </span>{' '}
                  {city.current.temp_f}
                </h5>
                <h5>
                  <span className="badge badge-danger">Humidity</span>{' '}
                  {city.current.humidity}
                </h5>
                <h5>
                  <span className="badge badge-warning">UV Rays</span>{' '}
                  {city.current.uv}
                </h5> */}
              </div>
            </Fragment>
          )}
        </div>
      )}
      {loading === true && <Spinner />}
    </div>
  );
};

export default Info;
