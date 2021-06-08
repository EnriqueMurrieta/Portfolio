import React from 'react';
import './App.css';
import shagy from './images/shagy.jpg';
import cuentas from './images/iphone.jpg';
import cuentas2 from './images/cuentas.jpg';
import bcmapa from './images/android.jpg';
import principal from './images/principal.jpg';

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'

//CROSS BROWSER COMPATIBILITY

function App() {
  const [verMas, onVerMas] = React.useState(false);
  const [boton, onBoton] = React.useState("Ver más capturas");
  const [verTech, onVerTech] = React.useState(false);
  const [botonTech, onBotonTech] = React.useState("Ver Tech Specs");
  const [verTech2, onVerTech2] = React.useState(false);
  const [botonTech2, onBotonTech2] = React.useState("Ver Tech Specs");
  const [verTechG, onVerTechG] = React.useState(false);
  const [botonTechG, onBotonTechG] = React.useState("General Tech Specs");

  const [verMasTest, onVerMasTest] = React.useState(true);

  const verMasFunction = () => {
    boton === "Ver menos" ? onBoton("Ver más capturas") : onBoton("Ver menos");
    onVerMas(!verMas);
  }

  const verTechFunction = () => {
    botonTech === "Ver menos" ? onBotonTech("Ver Tech Specs") : onBotonTech("Ver menos");
    onVerTech(!verTech);
  }

  const verTechFunction2 = () => {
    botonTech2 === "Ver menos" ? onBotonTech2("Ver Tech Specs") : onBotonTech2("Ver menos");
    onVerTech2(!verTech2);
  }

  const verTechFunctionG = () => {
    botonTechG === "Ver menos" ? onBotonTechG("General Tech Specs") : onBotonTechG("Ver menos");
    onVerTechG(!verTechG);
  }

  const gitHub = () => {
    window.open("https://github.com/EnriqueMurrieta", "_blank");
  }

  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/enrique-murrieta-acu%C3%B1a-a04231123/", "_blank");
  }

  const verTest = () => {
    onVerMasTest(!verMasTest)
  }

  return (
    <div>
      <div className="big-image">
        <div className="overlay">
          <div className="fitter">
            <h1>Murrieta Acuña, Esteban Enrique</h1>
            <h2>Desarrollador Móvil</h2>
            <div className="socialPacket">
              <div className="socialEmail">
                <FontAwesomeIcon icon={faInbox} />
              </div>
            </div>
            <p>enrique_murrieta@hotmail.com</p>
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
      <div className="content">
        <div className="contentOverlay">
          <div className="container1">
            <div className="overlay2">
              <img className="shags" src={shagy} alt="Enrique"/>
              <img className="bothApps" src={principal} alt="Enrique"/>
            </div>
          </div>
          <div className="category">
            <h1>Apps</h1>
          </div>
          <div className="container2">
            <div className="contained2Left">
              <div className="title">
                <h1>Cuentas</h1>
              </div>
                <div className="description">
                  <h3><i>I</i>nicia sesión con Google</h3>
                  <h3><i>R</i>ealiza proyectos de contabilidad con tus cuentas T</h3>
                  <h3><i>P</i>resiona guardar</h3>
                  <h3><i>A</i>ccede a todos tus proyectos guardados</h3>
                  <h3><i>L</i>os proyectos son guardados en la nube de Google</h3>
                </div>
                {verTech ?
                  <div>
                    <div className="verMas">
                      <button className="verMasBotton" onClick={verTechFunction}>{botonTech}</button>
                    </div>
                    <div className="info">
                      <ul className="infoUl">
                      <li>React</li>
                      <ul>
                        <li>Component</li>
                        <ul>
                          <li>Functional</li>
                          <ul>
                            <li>Hooks</li>
                            <ul>
                              <li>useState</li>
                              <li>useEffect</li>
                              <li>useLayoutEffect</li>
                            </ul>
                          </ul>
                          <li>Classes</li>
                          <ul>
                            <li>Constructor</li>
                            <li>Lifecycle methods</li>
                            <ul>
                              <li>componentDidMount</li>
                            </ul>
                          </ul>
                        </ul>
                      </ul>
                      <li>React Native</li>
                      <ul>
                        <li>React Navigation</li>
                        <ul>
                          <li>NavigationContainer</li>
                          <li>CreateStackNavigator</li>
                          <ul>
                            <li>Stack.Navigator</li>
                            <li>Stack.Screen</li>
                          </ul>
                          <li>CommonActions</li>
                          <ul>
                            <li>reset</li>
                          </ul>
                          <li>SetOptions</li>
                        </ul>
                        <li>View, Stylesheet, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Button</li>
                        <li>React Native Elements</li>
                      </ul>
                      <li>Expo.io</li>
                      <li>Firebase</li>
                      <ul>
                        <li>Firestore Database</li>
                        <li>Authentication</li>
                        <ul>
                          <li>Google</li>
                        </ul>
                      </ul>
                    </ul>
                    </div>
                  </div>
                :
                  <div className="verMas">
                    <button className="verMasBotton" onClick={verTechFunction}>{botonTech}</button>
                  </div>
              } 
                <div className="capturasPacket">
                  <img className="capturas" src={veintitres} alt="23" />
                  <img className="capturas" src={veinticuatro} alt="24" />
                </div>
                <p className="footNote">(2 / 12)</p>
                {verMasTest ?
                  <div>
                    <div className="capturasPacket">
                      <img className="capturas" src={veintitres} alt="23" />
                      <img className="capturas" src={veinticuatro} alt="24" />
                    </div>
                    <div className="footNotePacket">
                      <p className="footNote">(2 / 12)</p>
                    </div>
                  </div> 
                : null }
            </div>
            <div className="contained2">
              <div className="title">
                <h1>BCMapa</h1>
              </div>
              <div className="description">
                  <h3><i>V</i>isualiza una lista del Gobernador, ex Gobernadores, <br/>
                    sus partidos políticos y periodos</h3>
                  <h3><i>D</i>entro de sus perfiles se encuentra: </h3>
                    <h3>Predecesores, sucesores y partidos<br/>
                    Experiencia pública (cargo y periodo)<br/>
                    Ex partidos, educación superior y nacimiento</h3>
              </div>
              {verTech2 ?
                  <div>
                    <div className="verMas">
                      <button className="verMasBotton" onClick={verTechFunction2}>{botonTech2}</button>
                    </div>
                    <div className="info">
                      <ul className="infoUl">
                      <li>React</li>
                      <ul>
                        <li>Component</li>
                        <ul>
                          <li>Classes</li>
                          <ul>
                            <li>Constructor</li>
                          </ul>
                        </ul>
                      </ul>
                      <li>React Native</li>
                      <ul>
                        <li>React Navigation</li>
                        <ul>
                          <li>NavigationContainer</li>
                          <li>CreateStackNavigator</li>
                          <ul>
                            <li>Stack.Navigator</li>
                            <li>Stack.Screen</li>
                          </ul>
                        </ul>
                        <li>FlatList</li>
                        <ul>
                          <li>listHeaderComponent</li>
                          <li>renderItem</li>
                        </ul>
                        <li>View, Stylesheet, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Button</li>
                        <li>React Native Elements</li>
                      </ul>
                      <li>Expo.io</li>
                    </ul>
                    </div>
                  </div>
                :
                  <div className="verMas">
                    <button className="verMasBotton" onClick={verTechFunction2}>{botonTech2}</button>
                  </div>
              }
              <div className="capturasPacket">
                  <img className="capturas" src={uno} alt="1" />
                  <img className="capturas" src={dos} alt="2" />
              </div>
              <p className="footNote">(2 / 12)</p>
              {verMasTest ?
                  <div>
                    <div className="capturasPacket">
                      <img className="capturas" src={veintitres} alt="1" />
                      <img className="capturas" src={veinticuatro} alt="2" />
                    </div>
                    <div className="footNotePacket">
                      <p className="footNote">(2 / 12)</p>
                    </div>
                  </div> 
                : null }

            </div>
          </div>
          {verMas ? 
              <div className="container2">
                <div className="contained2Left">
                  <div className="title">
                    <h1>Cuentas</h1>
                  </div>
                  <div className="capturasPacket">
                    <img className="capturas" src={trece} alt="13" />
                    <img className="capturas" src={catorce} alt="14" />
                  </div>
                  <p className="footNote">(4 / 12)</p>  
                  <div className="capturasPacket">
                    <img className="capturas" src={quince} alt="15" />
                    <img className="capturas" src={dieciseis} alt="16" />
                  </div>
                  <p className="footNote">(6 / 12)</p>
                  <div className="capturasPacket">
                    <img className="capturas" src={diecisiete} alt="17" />
                    <img className="capturas" src={diecinueve} alt="19" />
                  </div>
                  <p className="footNote">(8 / 12)</p>
                  <div className="capturasPacket">
                    <img className="capturas" src={veinte} alt="20" />
                    <img className="capturas" src={veintiuno} alt="21" />
                  </div>
                  <p className="footNote">(10 / 12)</p>
                  <div className="capturasPacket">
                    <img className="capturas" src={veintidos} alt="22" />
                  </div>
                  <p className="footNote">(11 / 11)</p>
                  <img src={cuentas2} alt="Enrique"/>
                  <img src={cuentas} alt="Enrique"/>
                </div>
                <div className="contained2">
                  <div className="title">
                    <h1>BCMapa</h1>
                  </div>
                  <div className="capturasPacket">
                    <img className="capturas" src={tres} alt="3" />
                    <img className="capturas" src={cuatro} alt="4" />
                  </div>
                  <p className="footNote">(4 / 12)</p>
                  <div className="capturasPacket">
                    <img className="capturas" src={cinco} alt="5" />
                    <img className="capturas" src={seis} alt="6" />
                  </div>
                  <p className="footNote">(6 / 12)</p>
                  <div className="capturasPacket">
                    <img className="capturas" src={siete} alt="7" />
                    <img className="capturas" src={ocho} alt="8" />
                  </div>
                  <p className="footNote">(8 / 12)</p>
                  <div className="capturasPacket">
                    <img className="capturas" src={nueve} alt="9" />
                    <img className="capturas" src={diez} alt="10" />
                  </div>
                  <p className="footNote">(10 / 12)</p>
                  <div className="capturasPacket">
                    <img className="capturas" src={once} alt="11" />
                    <img className="capturas" src={doce} alt="12" />
                  </div>
                  <p className="footNote">(12 / 12)</p>
                  <img src={bcmapa} alt="Enrique"/>
                </div>
              </div>
          : 
            null
          }
            <button onClick={verTest}>Test</button>
            <div className="verMas">
                <button className="verMasBotton" onClick={verMasFunction}>{boton}</button>
              </div>
          {verTechG ?
            <div>
              <div className="verMas">
                <button className="verMasBotton" onClick={verTechFunctionG}>{botonTechG}</button>
              </div>
              <ul className="infoGeneral">
                <li>React</li>
                <ul>
                  <li>Component</li>
                  <ul>
                    <li>Functional</li>
                    <ul>
                      <li>Hooks</li>
                      <ul>
                        <li>useState</li>
                        <li>useEffect</li>
                        <li>useLayoutEffect</li>
                      </ul>
                    </ul>
                    <li>Classes</li>
                    <ul>
                      <li>Constructor</li>
                      <li>Lifecycle methods</li>
                      <ul>
                        <li>componentDidMount</li>
                      </ul>
                    </ul>
                  </ul>
                </ul>
                <li>React Native</li>
                <ul>
                  <li>React Navigation</li>
                  <ul>
                    <li>NavigationContainer</li>
                    <li>CreateStackNavigator</li>
                    <ul>
                      <li>Stack.Navigator</li>
                      <li>Stack.Screen</li>
                    </ul>
                    <li>CommonActions</li>
                    <ul>
                      <li>reset</li>
                    </ul>
                    <li>SetOptions</li>
                  </ul>
                  <li>FlatList</li>
                    <ul>
                      <li>listHeaderComponent</li>
                      <li>renderItem</li>
                    </ul>
                  <li>View, Stylesheet, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Button</li>
                  <li>React Native Elements</li>
                </ul>
                <li>Expo.io</li>
                <li>Firebase</li>
                <ul>
                  <li>Firestore Database</li>
                  <li>Authentication</li>
                  <ul>
                    <li>Google</li>
                  </ul>
                </ul>
              </ul>
            </div>
          :
            <div className="verMas">
              <button className="verMasBotton" onClick={verTechFunctionG}>{botonTechG}</button>
            </div>
          }
          <div className="category">
            <h1>Proximamente</h1>
          </div>
          <ul>
            <li>
              <div className="prox">
                <h1>App de noticias</h1>
              </div>
            </li>
            <li>
              <div className="prox">
                <h1>Refactorización de Cuentas y App de noticias con Redux</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
    </div>
  );
}

export default App;