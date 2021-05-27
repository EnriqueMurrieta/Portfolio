import './App.css';
import shagy from './images/shagy.jpg';

function App() {
  return (
    <div>
      <div className="big-image">
        <div className="overlay">
          <img className="shags"src={shagy} alt="Enrique"/>
          <h1>Murrieta Acuna, Esteban Enrique</h1>    
        </div>
      </div>
    </div>
  );
}

export default App;
