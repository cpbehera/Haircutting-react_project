import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='p-3' style={{backgroundColor: "#CFF4FC"}}>
        <h2 className='text-left py-3'>Login</h2>
            <form className='px-4 mt-4'>
                <div className="mb-3">
                    <label for="email" className="form-label">Username or Email address <span style={{color:"red",fontWeight:"500"}}>*</span></label>
                    <input type="email" className="form-control" id="InputEmail" />
                </div>
                <div className="mb-3">
                    <label for="Password" className="form-label">Password <span style={{color:"red",fontWeight:"500"}}>*</span></label>
                    <input type="password" className="form-control" id="InputPassword" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="Check" />
                    <label className="form-check-label" for="Checkbox">Remember me</label>
                    <a href="#" className='text-primary' style={{marginLeft:'100px'}}>Forgot Password</a>
                </div>
                <button type="submit" className="btn px-4">Login</button>

                <div className='my-3 text-center'>
                    <a href="#">Do not have a account ? <span className='text-primary'>Sign Up</span></a>
                </div>
            </form>
        </div>
    )
}

export default Login
