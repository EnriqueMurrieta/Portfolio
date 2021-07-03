import React from 'react';
import './App.css';
import Middle from './Middle';
import MainMenu from './MainMenu';

function Content () {
    return(
        <div className="content">
            <div className="contentOverlay">
                <Middle/>
                <MainMenu/>
            </div>
        </div>
    )
}

export default Content;