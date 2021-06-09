import React from 'react';
import './App.css';
import shagy from './images/shagy.jpg';
import principal from './images/principal.jpg';

function Middle() {
    return(
        <div className="container1">
            <div className="overlay2">
              <img className="shags" src={shagy} alt="Enrique"/>
              <img className="bothApps" src={principal} alt="Enrique"/>
            </div>
        </div>
    )
}

export default Middle;