import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import styled from "styled-components"
// Initializing form values
const initialFormValues = {
  username: "",
  password: "",
  role: "",
};

function App() {
  // Initializing state
  const [formValues, setformValues] = useState(initialFormValues);

  // Input change function
  const inputChange = (name, value) => {
    setformValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = () => {
    return null;
  };
  return (
    <>
      <div className="App"></div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login value={formValues} change={inputChange} submit={submit} />
          </Route>
          <Route exact path="/register">
            <Register value={formValues} change={inputChange} submit={submit} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
