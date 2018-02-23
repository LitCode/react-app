// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Video Show</h1>
    <input type="text" placeholder="search" />
    <Link to="/search">browse all</Link>
  </div>
);

export default Landing;
