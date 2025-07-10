
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './router/Home';
import Geolocalization from './router/Geolocalization';
import Register from './router/Register';
import './index.css'; 
import { Button, createTheme, ThemeProvider } from "flowbite-react";
import Login from './router/Login';
const customTheme = createTheme({
   button: {
    color: {
      primary: "bg-emerald-400 hover:bg-emerald-700 text-white",
      secondary: "bg-blue-500 hover:bg-blue-600 text-white",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
  },
  card: {
    root: {
      base: "!bg-white rounded-xl w-[500px] shadow-md border  border-gray-200",
    },
  },
  textInput: {
    field: {
      input: {
        base:
          "!bg-white text-gray-900 border border-gray-300 focus:ring-red-500 focus:border-red-500",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/map" element={<Geolocalization />}/>   
        <Route path="/register" element={<Register/>}/>  
        <Route path="/login" element={<Login/>}/>  
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
