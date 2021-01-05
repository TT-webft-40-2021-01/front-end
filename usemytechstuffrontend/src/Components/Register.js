import React from "react";
import { Link } from 'react-router-dom';

const Register = (props) => {
  const { value, submit, change } = props;

  // const onChange = (evt) => {
  //   const {name, value, type, checked } = evt.target;
  //   const valueToUse = type === 'radio' ? checked : value;
  //   change(name, valueToUse);
  // }

  // const url = 'http://localhost:3001/';

  const onChange = evt => {
    const { name, value } = evt.target;
    change(name, value);
}

  return (
    <div className="register-container">
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

        {/* Radio buttons */}
        <label>
            Renter
            <input
            type="radio"
            value="renter"
            name="role"
            onChange={onChange}
            checked={value.role === 'renter'}
            />
        </label>
        <label>
            Owner
            <input
            type="radio"
            value="owner"
            name="role"
            onChange={onChange}
            checked={value.role === 'owner'}
            />
        </label>
        <div className="submit-btn">
          <button>Submit</button>
        </div>

        {/* Which route to login page works best??? */}
        
        <div>
          {/* Already have an account? 
          <a href={url}>Login</a> */}
          Already have an account?
          <Link to='/'>Login</Link>
        </div>
      </form>
    </div>
  );
};
export default Register;

