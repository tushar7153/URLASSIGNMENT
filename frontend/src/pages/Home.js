import React from 'react';
import UrlShortener from '../components/UrlShortener';

const Home = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <UrlShortener />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

