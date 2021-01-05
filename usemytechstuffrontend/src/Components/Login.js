import React from 'react';

const Login = (props) => {
    const {
        value,
        submit,
        change
    } = props
    return (
        <div className='login-container'>
            <h1>Login Page</h1>
                <form className='login-form'>
                    <label>
                        Username
                        <input
                        value={value}
                        onChange={change}
                        name='username'
                        type='text'
                        placeholder='username'
                        />
                    </label>
                    <label>
                        Password
                        <input
                        value={value}
                        onChange={change}
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