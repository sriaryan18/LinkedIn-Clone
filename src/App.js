import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';


function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to = "/">Home</Link>          
        </li>
        <li>
        <Link to = "login">Login</Link>
        </li>
      </ul>
    </nav>
     <Routes>
        <Route  path='/' element={<h1>Hi This is homepage</h1>}/>
        <Route path='login' element={<Login/>}/>
     </Routes>
     </>
  );
}

export default App;
