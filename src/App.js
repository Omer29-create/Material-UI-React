import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyled />
        <TextField
          variant="filled"
          color="secondary"
          type="time"
          label="The Time"
          placeholder="test@test.com"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained" size="large">
          <Button startIcon={<SaveIcon />}>SAVE</Button>
          <Button startIcon={<DeleteIcon />}>DISCARD</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
