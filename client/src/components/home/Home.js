import React from 'react';
import './home.css';

const home = () => {
  return (
    <>
      <div className="home">
        <div className="container-home">
          <p>Farhan Art Museum</p>
          <div className="art-pertama">
            <p>30 November2021 - 25 January 2022</p>
            <div className="content">
              <img
                src="https://images.unsplash.com/photo-1580204745408-9c18ddb64978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
              <div className="text-content">
                <ul>
                  <li className="li1">National</li>
                  <li className="li2">Photo</li>
                  <li className="li3">Graphy</li>
                  <li className="li4">Prize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
