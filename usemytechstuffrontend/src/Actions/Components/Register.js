import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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

        <div>
          {/* Already have an account? 
          <a href={url}>Login</a> */}
          Already have an account?
          <Link to="/" onClick={pageChange}>
            Login
          </Link>
        </div>
        <StyledCopyright>
        <h6> Copyright C.Swartz, L.Stevens 2021 </h6>
        </StyledCopyright>
      </StyledForm>
    </StyledRegisterContainer>
  );
};
export default Register;

const StyledRegisterContainer = styled.div`
  color: black;
  height: auto;    //99.36vh ; //58.21rem; for my 1080p monitor
  width: auto;
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
  // Maybe keep box for the controls colored, and have a picture behind it
`;

const StyledForm = styled.form`
height:68.5vh;
`

const StyledInputs = styled.div`
  color: black;
  height: auto; //58.21rem; for my 1080p monitor
  width: auto;
  background-color: antiquewhite;
  display: flex;
  border: 3px solid slategray;
  box-shadow: 1rem 1rem gray;
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
  height: auto; //58.21rem; for my 1080p monitor
  width: 80% ;
  background-color: antiquewhite;
  display: flex;
  border: 3px solid slategray;
  align-items: center;
  justify-content: space-evenly;
  text-align: match-parent;
  padding: 5% 5% 5% 5%;
  margin: 0% 0% 0% 0%;
`;

//purple: #D8BFD8

const StyledCopyright = styled.div`
/* padding: 10% 0 0% 0 ;
margin: 2% 0 0 0; */
`

//GOTTA MAKE FORM CONTAINER, SET REG CONTAINER TO AUTO, FORM TO VH