import React from 'react';
import Search from './Search';
import Info from './Info';

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Current Weather</h1>
      <div className="mt-2">
        <Search />
        <Info />
      </div>
    </div>
  );
};

export default Home;
