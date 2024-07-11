import React, { useState, useEffect } from 'react';

export const Card = () => {
  return (
    <>
      <main className="main overflow-hidden">
        <div className="row row-cols-1 row-cols-md-3 text-center">
          <div className="col m-auto">
            <div className="card mb-4 rounded-3 w-75 m-auto">
              <div className="card-header text-white bg-black">
                <h3 className="fw-bold" id="city-name">Weather for Mumbai</h3>
              </div>
              <div className="card-body px-2 text-bold">
                <h1 className="card-title pricing-card-title all" id="degree"><img src="tube-spinner(1).svg" alt=""
                  width="90px" /></h1>
                <h5 id="DataError"></h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li id="humidity" className="all"></li>
                  <li id="feelslike" className="all"></li>
                  <li id="maxtemp" className="all"></li>
                  <li id="mintemp" className="all"></li>
                  <li id="windspeed" className="all"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}