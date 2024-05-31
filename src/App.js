import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Login from './pages/Login';


function App() {
  // axios.get('/test').then(resp=>console.log("resp")).catch((err)=>{console.log("error")}).finally(()=>{console.log("final")})
  return (
    <Login/>
  );
}

export default App;
