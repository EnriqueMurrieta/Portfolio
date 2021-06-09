import React from 'react';
import './App.css';
import Middle from './Middle';
import Projects from './Projects';

function Content () {
    return(
        <div className="content">
            <div className="contentOverlay">
                <Middle/>
                <Projects/>
            </div>
        </div>
    )
}

export default Content;