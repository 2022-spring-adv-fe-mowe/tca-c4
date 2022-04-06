import logo from './logo.svg';
import './App.css';
import  {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Play } from './Play';
import { useState } from 'react';


function App() {

  //Lifted State
  const [gameResults, setGameResults] = useState([]);

  const addNewGameResult = (gameResult) => {
    setGameResults([
      ...gameResults
      , gameResult
    ]);
  };

  return (
    <div className="App">
      
      <Routes>
        <Route
          path='/'
          element={
            <Home
              gameResults = {gameResults}
            />
          }
        />

        <Route
          path='/play'
          element={
            <Play
              addNewGameResult = {addNewGameResult}
            />
          }
        />


      </Routes>
      
      
    </div>
  );
}

export default App;
