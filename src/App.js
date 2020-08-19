import React from 'react';
import './App.css';
import NavbarComp from './components/layouts/NavbarComp';
import Home from './components/Home';
import WeatherState from './components/context/weatherApi/WeatherState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Forecast from './components/forecast/Forecast';
import AlertState from './components/context/alert/AlertState';
import Alert from './components/layouts/Alert';

function App() {
  return (
    <Router>
      <WeatherState>
        <AlertState>
          <div>
            <NavbarComp />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/forecast" component={Forecast} />
              </Switch>
            </div>
          </div>
        </AlertState>
      </WeatherState>
    </Router>
  );
}

export default App;
