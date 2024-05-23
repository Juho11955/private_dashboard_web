import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  // axios.get('/test').then(resp=>console.log("resp")).catch((err)=>{console.log("error")}).finally(()=>{console.log("final")})
  return (
    <div className="App">
      <p>test_page!!!</p>
      <div>
	<span>test_contents</span>
      </div>
    </div>
  );
}

export default App;
