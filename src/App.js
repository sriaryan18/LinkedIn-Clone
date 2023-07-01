import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';


function App() {
  return (
   <>
     <Routes>
        <Route  path='/' element={ <HomePage/>}/>
        
     </Routes>
     </>
  );
}

export default App;
