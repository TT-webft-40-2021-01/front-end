import React from "react";

const Register = (props) => {
  const { value, submit, change } = props;
  return (
    <div className="register-container">
      <h1>Register Page</h1>
      <form className="register-form">
        <label>
          Username
          <input
            value={value.username}
            onChange={change}
            name="username"
            type="text"
            placeholder="Username"
          />
        </label>

        <label>
          Password
          <input
            value={value.password}
            onChange={change}
            name="password"
            type="text"
            placeholder="Password"
          />
        </label>
        <label>
            Renter
            <input
            type="radio"
            value="renter"
            name="role"
            onChange={change}
            checked={value.role==="renter"}
            />
        </label>
        <label>
            Owner
            <input
            type="radio"
            value="owner"
            name="role"
            onChange={change}
            checked={value.role==="owner"}
            />
        </label>
        <div className="submit-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
//Use Radio Buttons, keep it as a string
//This would be for renter/owner dynamic
//Also, Routing?
