import logo from "./logo.svg";
import "./App.css";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
// import SaveIcon from "@mui/icons-material/SaveIcon"
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonGroup } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { Typography } from "@mui/material";
// import "fontsource-roboto"
import { Container, Paper, Grid } from "@mui/material";

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";

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
    <Container maxWidth="xs">
      <div className="App">
        <header className="App-header">
          {/* <TextField variant="filled" /> */}
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">MUI Themeing</Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>

          <Typography variant="h2">Hello</Typography>
          <Typography variant="subtitle1">Hello</Typography>
          <Typography variant="subtitle1" component="div">
            DIV
          </Typography>

          <Grid container spacing={2} justify="center">
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
          </Grid>
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
    </Container>
  );
}

export default App;
