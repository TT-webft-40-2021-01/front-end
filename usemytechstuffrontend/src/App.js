import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Actions/Components/Login";
import Register from "./Actions/Components/Register";

// Initializing form values
const initialFormValues = {
  username: "",
  password: "",
  role: "",
};


function App() {
  // Initializing state
  const [formValues, setFormValues] = useState(initialFormValues);

  // Input change function
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // When page changes between Login and Register, forms reset to empty
  const pageChangeReset = () => {
    setFormValues(initialFormValues);
  }

  const submit = () => {
    return null;
  };
  return (
    <>
      <div className="App"></div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login value={formValues} change={inputChange} pageChange={pageChangeReset} submit={submit} />
          </Route>
          <Route exact path="/register">
            <Register value={formValues} change={inputChange} pageChange={pageChangeReset} submit={submit} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
