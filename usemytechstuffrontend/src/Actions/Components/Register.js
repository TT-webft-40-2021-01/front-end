import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Register.css"
const Register = (props) => {
  const { value, submit, change, pageChange } = props;

  // const onChange = (evt) => {
  //   const {name, value, type, checked } = evt.target;
  //   const valueToUse = type === 'radio' ? checked : value;
  //   change(name, valueToUse);
  // }

  // const url = 'http://localhost:3001/';

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <StyledRegisterContainer className="register-container">
      <h1>Use My Tech Stuff Registration</h1>
      <StyledForm className="register-form">
        <StyledInputs>
          <label>
            Username
            <input
              value={value.username}
              onChange={onChange}
              name="username"
              type="text"
              placeholder="Username"
            />
          </label>

          <label>
            Password
            <input
              value={value.password}
              onChange={onChange}
              name="password"
              type="text"
              placeholder="Password"
            />
          </label>

          <br></br>
          {/* Radio buttons */}
          <StyledRadioButtons>
            <label>
              Renter
              <input
                type="radio"
                value="renter"
                name="role"
                onChange={onChange}
                checked={value.role === "renter"}
              />
            </label>
            <label>
              Owner
              <input
                type="radio"
                value="owner"
                name="role"
                onChange={onChange}
                checked={value.role === "owner"}
              />
              <br></br>
            </label>
          </StyledRadioButtons>

          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </StyledInputs>
        {/* Which route to login page works best??? */}

        <StyledLoginLink>
          {/* Already have an account? 
          <a href={url}>Login</a> */}
          Already have an account?
          <Link to="/" onClick={pageChange}>
            <br></br>
            Login
          </Link>
        </StyledLoginLink>
        <StyledCopyright>
          <h6>
            {" "}
            Copyright Lambda Track Team Full-Time 40,<br></br>
            January 2021{" "}
          </h6>
        </StyledCopyright>
      </StyledForm>
    </StyledRegisterContainer>
  );
};
export default Register;

const StyledRegisterContainer = styled.div`
  color: black;
  height: auto;
  width: auto;
  background-color: antiquewhite; //purple: #D8BFD8
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding: 50% 0% 50% 0%; */
  margin: 1px 1px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledForm = styled.form`
  height: auto;  // 68.5vh; //currently in login page
  //92.85vh; // for my 1440p monitor
  // 90.2vh; //for my 1080p monitor
`;

const StyledInputs = styled.div`
  color: black;
  height: auto;
  width: auto;
  background-color: #d8bfd8; // antiquewhite; //purple: #D8BFD8
  display: flex;
  border: 3px solid slategray;
  box-shadow: 0.3rem 0.3rem gray;
  align-items: center;
  justify-content: space-evenly;
  text-align: match-parent;
  padding: 5% 5% 5% 5%;
  margin: 0% 0% 0% 0%;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledRadioButtons = styled.div`
  color: black;
  height: auto;
  width: 80%;
  background-color: #d8bfd8; // antiquewhite; //purple: #D8BFD8
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: match-parent;
  padding: 5% 5% 5% 5%;
  margin: 0% 0% 0% 0%;
`;

const StyledLoginLink = styled.div`
  margin: 10% auto auto auto;
`

const StyledCopyright = styled.div`
  padding: 5% 0 5% 0;
  margin: 10% 0 0 0;
`;
/* To change the background color of the full page, we need to add it in the css files, either this one, or a new one */