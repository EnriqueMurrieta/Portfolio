import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const gitHub = () => {
        window.open("https://github.com/EnriqueMurrieta", "_blank");
    }
    
    const linkedIn = () => {
        window.open("https://www.linkedin.com/in/enrique-murrieta-acu%C3%B1a-a04231123/", "_blank");
    }

    return(
        <div className="big-image">
            <div className="overlay">
            <div className="fitter">
                <h1>Murrieta Acuña, Esteban Enrique</h1>
                <h2>Mobile Developer</h2>
                <div className="socialPacket">
                <div className="socialEmail">
                    <FontAwesomeIcon icon={faInbox} />
                </div>
                </div>
                <p>enrique_murrieta@hotmail.com</p>
                <div className="socialPacketFather">
                <div className="socialPacket">
                    <button className="social" onClick={gitHub}>
                    <FontAwesomeIcon icon={faGithub} />
                    <p className="socialNetwork">GitHub</p>
                    </button>
                </div>
                <div className="socialPacket">
                    <button className="social" onClick={linkedIn}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p className="socialNetwork">LinkedIn</p>
                    </button>
                </div>
                </div>
            </div>  
            </div>
        </div>
    )
}

export default Header;