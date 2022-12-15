import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Checkbox, Button, ButtonGroup, FormControlLabel, TextField } from "@mui/material";
import { Save, Delete } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <FormControlLabel 
      label="checkbox"
      control={<Checkbox
        checked={checked}
        onChange={() => setChecked((current) => !current)}
      />} />
      
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <div id="root">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <TextField
          variant="outlined"
          color="secondary"
          label="your email"
          placeholder="email"
          type='email'
        />
        <CheckboxExample />
        <ButtonGroup>
          <Button startIcon={<Save />} variant="contained">
            Save
          </Button>
          <Button startIcon={<Delete />} variant="contained" color="secondary">
            Discard
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
