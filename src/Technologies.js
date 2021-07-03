import React from 'react';
import './App.css';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Complementary from './Complementary';
import TechSpecs from './TechSpecs';

function Technologies () {
    const [frontEnd, onFrontEnd] = React.useState(false);
    const [backEnd, onBackEnd] = React.useState(false);
    const [complementary, onComplementary] = React.useState(false);
    const [techSpecs, onTechSpecs] = React.useState(false);

    const [pressedFront, onPressedFront] = React.useState("Button");
    const [pressedBack, onPressedBack] = React.useState("Button");
    const [pressedComp, onPressedComp] = React.useState("Button");
    const [pressedTechSpecs, onPressedTechSpecs] = React.useState("Button");

    const frontPress = () => {
        if (!frontEnd){
            onPressedBack("Button");
            onPressedComp("Button");
            onPressedTechSpecs("Button");
            onBackEnd(false);
            onComplementary(false);
            onTechSpecs(false);
            onPressedFront("ButtonPressed");
            onFrontEnd(true);
        }
    }

    const backPress = () => {
        if (!backEnd){
            onPressedFront("Button");
            onPressedComp("Button");
            onPressedTechSpecs("Button");
            onFrontEnd(false);
            onComplementary(false);
            onTechSpecs(false);
            onPressedBack("ButtonPressed");
            onBackEnd(true);
        }
    }

    const compPress = () => {
        if (!complementary){
            onPressedFront("Button");
            onPressedBack("Button");
            onPressedTechSpecs("Button");
            onBackEnd(false);
            onFrontEnd(false);
            onTechSpecs(false);
            onPressedComp("ButtonPressed");
            onComplementary(true);
        }
    }

    const techSpecsPress = () => {
        if (!techSpecs){
            onPressedFront("Button");
            onPressedBack("Button");
            onPressedComp("Button");
            onBackEnd(false);
            onFrontEnd(false);
            onComplementary(false);
            onPressedTechSpecs("ButtonPressed");
            onTechSpecs(true);
        }
    }

    return(
        <div>
            <div className="techMenu">
                <button className={`techMenu${pressedFront}`} onClick={frontPress}>FrontEnd</button>
                <button className={`techMenu${pressedBack}`} onClick={backPress}>BackEnd</button>
                <button className={`techMenu${pressedComp}`} onClick={compPress}>Complementary</button>
                <button className={`techMenu${pressedTechSpecs}`} onClick={techSpecsPress}>Technologies Specifications</button>
            </div>
            {
                frontEnd ? <FrontEnd/> :
                    <div>
                        {
                            backEnd ? <BackEnd/> :
                                <div>
                                    {
                                        complementary ? <Complementary/> : 
                                            <div>
                                                {
                                                    techSpecs ? <TechSpecs/> : <div className="emptySpace"></div>
                                                }
                                            </div>
                                    }
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default Technologies;