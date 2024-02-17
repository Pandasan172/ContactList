import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 class="h1_notfoud">404</h1>
      <p>Сторінка не знайдена</p>
      <Link to="/">
        <button className="return-home-btn">Повернутися на головну сторінку</button>
      </Link>
    </div>
  );
};

export default NotFound;