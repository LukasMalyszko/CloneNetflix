// import React from 'react'
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__wrapper">
          <h2>404 not found!</h2>
          <div className="not-found-page__img-container">
            <img src="/netflix-black.png" alt="netflix-logo" />
          </div>
      </div>
    </div>
  );
};
