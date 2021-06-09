import React from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Fab() {
    const gitHub = () => {
        window.open("https://github.com/EnriqueMurrieta", "_blank");
    }
    
    const linkedIn = () => {
        window.open("https://www.linkedin.com/in/enrique-murrieta-acu%C3%B1a-a04231123/", "_blank");
    }
    
    return(
        <div className="fab">
            <button className="socialFixed" onClick={gitHub}>
            <FontAwesomeIcon icon={faGithub} />
            <p className="socialNetwork2">GitHub</p>
            </button>
            <button className="socialFixed" onClick={linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
            <p className="socialNetwork2">LinkedIn</p>
            </button>
        </div>
    )
}

export default Fab;