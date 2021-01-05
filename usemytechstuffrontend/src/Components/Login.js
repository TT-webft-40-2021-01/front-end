import React from 'react';

const Login = (props) => {
    const {
        value,
        submit,
        change
    } = props

    // onChange function that changes the value of the input based on the name of the targeted event
    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
    }
    return (
        <div className='login-container'>
            <h1>Login Page</h1>
                <form className='login-form'>
                    <label>
                        Username
                        <input
                        value={value.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                        placeholder='username'
                        />
                    </label>

                    <label>
                        Password
                        <input
                        value={value.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                        placeholder='password'
                        />
                    </label>

                    <div className='submit-btn'>
                        <button>Submit</button>
                    </div>
                    <div className='register-text'>
                        Dont have an account? <a href=" ">Register Here</a>
                    </div>
                </form>
        </div>
    )
}
export default Login;