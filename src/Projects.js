import React from 'react';
import './App.css';

import trece from './images/capturas/13.PNG';
import catorce from './images/capturas/14.jpg';
import quince from './images/capturas/15.PNG';
import dieciseis from './images/capturas/16.PNG';
import diecisiete from './images/capturas/17.PNG';
import diecinueve from './images/capturas/19.PNG';
import veinte from './images/capturas/20.PNG';
import veintiuno from './images/capturas/21.PNG';
import veintidos from './images/capturas/22.PNG';
import veintitres from './images/capturas/23.PNG';
import veinticuatro from './images/capturas/24.PNG';

import uno from './images/capturas/1.PNG';
import dos from './images/capturas/2.PNG';
import tres from './images/capturas/3.PNG';
import cuatro from './images/capturas/4.PNG';
import cinco from './images/capturas/5.PNG';
import seis from './images/capturas/6.PNG';
import siete from './images/capturas/7.PNG';
import ocho from './images/capturas/8.PNG';
import nueve from './images/capturas/9.PNG';
import diez from './images/capturas/10.PNG';
import once from './images/capturas/11.PNG';
import doce from './images/capturas/12.PNG';

function Projects() {
    const [verMas, onVerMas] = React.useState(false);
    const [verMas2, onVerMas2] = React.useState(false);
    const [verMas3, onVerMas3] = React.useState(false);
    const [verMas4, onVerMas4] = React.useState(false);
    const [verMas5, onVerMas5] = React.useState(false);

    const verMasFunction1 = () => {
        verMas ?  
        verMas2 ? 
            verMas3 ? 
            verMas4 ? 
                verMas5 ? 
                onVerMas5(verMas5)
                : onVerMas5(true) 
            : onVerMas4(true) 
            : onVerMas3(true) 
        : onVerMas2(true) 
        : onVerMas(true)
    }

    const verMenos = () => {
        onVerMas(false)
        onVerMas2(false)
        onVerMas3(false)
        onVerMas4(false)
        onVerMas5(false)
    }

    return(
        <div>
            <div className="category">
              <h1>Apps</h1>
            </div>
            <div className="container2">
              <div className="contained2Left">
                <div className="title">
                  <h1>Cuentas</h1>
                </div>
                  <div className="description">
                    <h3><i>L</i>ogin with Google</h3>
                    <h3><i>D</i>o accounting projects with your T accounts</h3>
                    <h3><i>P</i>ress Save</h3>
                    <h3><i>A</i>ccess to your saved projects</h3>
                    <h3><i>P</i>rojects are stored in Google Cloud with 1 click</h3>
                  </div>
                  <div className="capturasPacket">
                    <img className="capturas" src={veintitres} alt="23" />
                    <img className="capturas" src={veinticuatro} alt="24" />
                  </div>
                  <p className="footNote">(2 / 11)</p>
                  {verMas ?
                    <div>
                      <div className="capturasPacket">
                        <img className="capturas" src={trece} alt="13" />
                        <img className="capturas" src={catorce} alt="14" />
                      </div>
                      <p className="footNote">(4 / 11)</p>
                      {verMas2 ? 
                        <div>
                          <div className="capturasPacket">
                            <img className="capturas" src={quince} alt="15" />
                            <img className="capturas" src={dieciseis} alt="16" />
                          </div>
                          <p className="footNote">(6 / 11)</p>
                          {verMas3 ? 
                            <div>
                              <div className="capturasPacket">
                                <img className="capturas" src={diecisiete} alt="17" />
                                <img className="capturas" src={diecinueve} alt="19" />
                              </div>
                              <p className="footNote">(8 / 11)</p>
                              {verMas4 ? 
                                <div>
                                  <div className="capturasPacket">
                                    <img className="capturas" src={veinte} alt="20" />
                                    <img className="capturas" src={veintiuno} alt="21" />
                                  </div>
                                  <p className="footNote">(10 / 11)</p>
                                  {verMas5 ? 
                                    <div>
                                      <div className="capturasPacket">
                                        <img className="capturas" src={veintidos} alt="22" />
                                      </div>
                                      <p className="footNote">(11 / 11)</p>
                                    </div> 
                                  : null}
                                </div> 
                              : null}
                            </div> 
                          : null }
                        </div>
                      : null}  
                    </div> 
                  : null }
              </div>
              <div className="contained2">
                <div className="title">
                  <h1>BCMapa</h1>
                </div>
                <div className="description">
                    <h3><i>V</i>isualize a list of the Governor, ex Governors, <br/>
                      their political parties and periods</h3>
                    <h3><i>F</i>ind in their profiles: </h3>
                      <h3>Predecessors, successors and parties<br/>
                      public experience (position and period)<br/>
                      Ex parties, education and date of birth</h3>
                </div>
                <div className="capturasPacket">
                    <img className="capturas" src={uno} alt="1" />
                    <img className="capturas" src={dos} alt="2" />
                </div>
                <p className="footNote">(2 / 12)</p>
                {verMas ?
                    <div>
                      <div className="capturasPacket">
                        <img className="capturas" src={tres} alt="3" />
                        <img className="capturas" src={cuatro} alt="4" />
                      </div>
                      <p className="footNote">(4 / 12)</p>
                      {verMas2 ? 
                        <div>
                          <div className="capturasPacket">
                            <img className="capturas" src={cinco} alt="5" />
                            <img className="capturas" src={seis} alt="6" />
                          </div>
                          <p className="footNote">(6 / 12)</p>
                          {verMas3 ? 
                            <div>
                              <div className="capturasPacket">
                                <img className="capturas" src={siete} alt="7" />
                                <img className="capturas" src={ocho} alt="8" />
                              </div>
                              <p className="footNote">(8 / 12)</p>
                              {verMas4 ? 
                                <div>
                                  <div className="capturasPacket">
                                    <img className="capturas" src={nueve} alt="9" />
                                    <img className="capturas" src={diez} alt="10" />
                                  </div>
                                  <p className="footNote">(10 / 12)</p>
                                  {verMas5 ? 
                                    <div>
                                      <div className="capturasPacket">
                                        <img className="capturas" src={once} alt="11" />
                                        <img className="capturas" src={doce} alt="12" />
                                      </div>
                                      <p className="footNote">(12 / 12)</p>
                                    </div> 
                                  : null}
                                </div> 
                              : null}
                            </div> 
                          : null }
                        </div>
                      : null}
                    </div> 
                  : null }
              </div>
            </div>
            {verMas ?
              <div> 
                {verMas5 ? 
                  <div className="verMas">
                    <button className="verMasBotton" onClick={verMenos}>Less screenshots</button>
                  </div> 
                : 
                  <div>
                    <div className="verMas">
                      <button className="verMasBotton" onClick={verMasFunction1}>More screenshots</button>
                    </div>
                    <div className="verMas">
                      <button className="verMasBotton" onClick={verMenos}>Less screenshots</button>
                    </div>
                  </div>
                }
              </div>  
            : 
              <div className="verMas">
                <button className="verMasBotton" onClick={verMasFunction1}>More screenshots</button>
              </div>
            }
            <div className="category">
              <h1>Coming soon</h1>
            </div>
            <ul>
            <li>
              <div className="prox">
                <h1>News App</h1>
              </div>
            </li>
            <li>
              <div className="prox">
                <h1>Cuentas and App refactor with Redux</h1>
              </div>
            </li>
          </ul>
        </div>
    )
}

export default Projects;

/*
<div className="description">
                    <h3><i>I</i>nicia sesión con Google</h3>
                    <h3><i>R</i>ealiza proyectos de contabilidad con tus cuentas T</h3>
                    <h3><i>P</i>resiona guardar</h3>
                    <h3><i>A</i>ccede a todos tus proyectos guardados</h3>
                    <h3><i>L</i>os proyectos son guardados en la nube de Google</h3>
                  </div>
*/

/*
<div className="description">
                    <h3><i>V</i>isualiza una lista del Gobernador, ex Gobernadores, <br/>
                      sus partidos políticos y periodos</h3>
                    <h3><i>D</i>entro de sus perfiles se encuentra: </h3>
                      <h3>Predecesores, sucesores y partidos<br/>
                      Experiencia pública (cargo y periodo)<br/>
                      Ex partidos, educación superior y nacimiento</h3>
                </div>
*/