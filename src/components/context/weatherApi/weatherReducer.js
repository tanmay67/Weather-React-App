import {
  GET_CITY,
  SET_LOADING,
  GET_CITY_FORECAST,
  CLEAR_CITY,
  CLEAR_FORECAST,
} from '../Types';

export default (state, action) => {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        city: action.payload,
        loading: false,
      };
    case GET_CITY_FORECAST:
      return {
        ...state,
        loading: false,
        cityForecastData: action.payload,
      };
    case CLEAR_CITY:
      return {
        ...state,
        city: null,
      };
    case CLEAR_FORECAST:
      return {
        ...state,
        cityForecastData: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
