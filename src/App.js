import logo from './logo.svg';
import './App.css';
import  {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Play } from './Play';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />

        <Route
          path='/play'
          element={<Play/>}
        />


      </Routes>
      
      
    </div>
  );
}

export default App;
