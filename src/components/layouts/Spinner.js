import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        className="text-center"
        src={spinner}
        alt="loading..."
        style={{ margin: 'auto' }}
      />{' '}
    </div>
  );
};

export default Spinner;
