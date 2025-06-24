
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './router/Home';
import Geolocalization from './router/Geolocalization';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/map" element={<Geolocalization />}/>    
      </Routes>
    </Router>
    
   

    
  );
}

export default App;
