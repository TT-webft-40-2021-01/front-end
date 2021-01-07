import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
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
      <h1>Register Page</h1>
      <form className="register-form">
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
        <div className="submit-btn">
          <button>Submit</button>
        </div>

        {/* Which route to login page works best??? */}

        <div>
          {/* Already have an account? 
          <a href={url}>Login</a> */}
          Already have an account?
          <Link to="/" onClick= {pageChange} >Login</Link>
        </div>
      </form>
    </StyledRegisterContainer>
  );
};
export default Register;

const StyledRegisterContainer = styled.div`
  color: black;
  background-color: antiquewhite;
  display: flex;
  border: 3px solid slateblue;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding: 50% 0% 50% 0%; */
  margin: auto;
  flex-wrap: wrap;
  flex-direction: column;
  //Break up the differnt sections into other Style elements, and use justify content and align items (also padding (TRBL)) to move them throughout the doc
  // Perhaps add a "copyright" or something at the very bottom, and just squeeeeesh it all the way down, extending the background
`