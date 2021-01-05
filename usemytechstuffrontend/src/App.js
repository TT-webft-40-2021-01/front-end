import React, { useState } from 'react';
import "./App.css";
import Login from './Components/Login'
import Register from './Components/Register'

// Initializing form values
const initialFormValues = {
  username: '',
  password: '',
  role: '',
}

function App() {
  // Initializing state
  const [formValues, setformValues] = useState(initialFormValues);
  
  // Input change function
  const inputChange = (name, value) => {
    setformValues({
      ...formValues, [name]: value
    })
  };
  
  const submit = () => {
    return null
  }
  return (
    <>
  <div className="App"></div>
  <Login value={formValues} change={inputChange} submit={submit}/>
  <Register value={formValues} change= {inputChange} submit={submit}/>
  </>

  );
}

export default App;
