import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
// import SaveIcon from "@mui/icons-material/SaveIcon"
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ButtonGroup} from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ButtonGroup>
          <Button startIcon={<FavoriteIcon />} end Icon={<FavoriteIcon />} onClick={()=>alert("Hello")} href="#" variant="contained" color="primary">Discard</Button>
          <Button startIcon={<FavoriteIcon />} end Icon={<FavoriteIcon />} onClick={()=>alert("Hello")} href="#" variant="contained" color="secondary">Save</Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
