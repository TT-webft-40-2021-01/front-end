import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Register from "./Register";
// import './Login.css';

// Styles

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  background-color: antiquewhite;
  `

const TitleDiv = styled.h1`
text-align: center;
font-size: 2rem;
font-weight: 500;
margin-top: 5rem;
`
// All elements other than title, where page height is born
const Form = styled.form`
width: 70%;
height: 68.5vh;
margin: auto;
display: flex;
flex-direction:column;
/* justify-content: center; */
text-align: center;
`

// Username, password, submitBtn
const Input = styled.div`
width: 70%;
/* margin: auto; */
height: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
border: 1px solid black;
background-color: #D8BFD8;
position: relative;
left: 16%;
margin-bottom: 2%;
/* margin-bottom: 40%; */

`
// Username password and text inputs specifically
const Label = styled.label `
display: flex;
flex-direction: column;
margin-bottom: 1%;

input {
  width: 100%;
  padding: 2%;
  background-color: antiquewhite;
}
`


const Login = (props) => {
  const { value, submit, change, pageChange } = props;

  // onChange function that changes the value of the input based on the name of the targeted event
  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };
  return (
    <Container className="login-container">
      <TitleDiv>
      <h1>Use My Tech Stuff</h1>
      </TitleDiv>

      <Form className="login-form">
      <Input>
        <Label>
          Username:
          <input
            value={value.username}
            onChange={onChange}
            name="username"
            type="text"
            // placeholder="here"
          />
        </Label>

        <Label>
          Password:
          <input
            value={value.password}
            onChange={onChange}
            name="password"
            type="text"
            // placeholder="here"
          />
        </Label>
        <div className="submit-btn">
          <button>Submit</button>
        </div>
      </Input>
        <div className="register-text">
          Don't have an account? 
          <Link to="/Register"  onClick= {pageChange} > Register</Link>
        </div>
      </Form>
    </Container>
  );
};


export default Login;