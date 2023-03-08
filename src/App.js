import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={()=>alert("Hello")} href="#" variant="contained" color="primary">Hello World</Button>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
