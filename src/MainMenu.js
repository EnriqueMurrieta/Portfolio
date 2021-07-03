import React from 'react';
import './App.css';
import Projects from './Projects';
import Technologies from './Technologies';

function MainMenu () {
    const [projects, onProjects] = React.useState(false);
    const [technologies, onTechnologies] = React.useState(false);

    const [pressedProjects, onPressedProjects] = React.useState("Button");
    const [pressedTechs, onPressedTechs] = React.useState("Button");

    const projectPress = () => {
        if (!projects) {
            onPressedTechs("Button")
            onTechnologies(false)
            onPressedProjects("ButtonPressed")
            onProjects(true)
        }
    }

    const technologiesPress = () => {
        if (!technologies) {
            onPressedProjects("Button")
            onProjects(false)
            onPressedTechs("ButtonPressed")
            onTechnologies(true)
        }
    }

    return(
        <div>
            <div className="mainMenu">
                <button className={`mainMenu${pressedProjects}`} onClick={projectPress}>Projects</button>
                <button className={`mainMenu${pressedTechs}`} onClick={technologiesPress}>Technologies</button>
            </div>
            {
                projects == true ? <Projects/> :
                    <div>
                        {
                            technologies ? <Technologies/> : <div className="emptySpace"></div> 
                        }
                    </div>
            }
        </div>
    )
}

export default MainMenu;