import logo from "./logo.svg";
import "./App.css";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
// import SaveIcon from "@mui/icons-material/SaveIcon"
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ButtonGroup } from "@mui/material";
import {} from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
// import {FormControlLabel} from "@mui/material";

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <FormControlLabel
        control={
         
          <Checkbox
            checked={checked}
            checkedIcon={<DeleteForever />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Assertion 1"
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />

        <ButtonGroup>
          <Button
            startIcon={<FavoriteIcon />}
            end
            Icon={<FavoriteIcon />}
            onClick={() => alert("Hello")}
            href="#"
            variant="contained"
            color="primary"
          >
            Discard
          </Button>
          <Button
            startIcon={<FavoriteIcon />}
            end
            Icon={<FavoriteIcon />}
            onClick={() => alert("Hello")}
            href="#"
            variant="contained"
            color="secondary"
          >
            Save
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
