import React from 'react'

function Login() {
    return (
        <div className='px-3'>
        <h2 className='text-left py-3'>Login</h2>
            <form className='px-4 mt-4'>
                <div class="mb-3">
                    <label for="email" class="form-label">Username or Email address <span style={{color:"red",fontWeight:"500"}}>*</span></label>
                    <input type="email" class="form-control" id="InputEmail" />
                    
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password <span style={{color:"red",fontWeight:"500"}}>*</span></label>
                    <input type="password" class="form-control" id="InputPassword" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="Check" />
                    <label class="form-check-label" for="Checkbox">Remember me</label>
                </div>
                <button type="submit" class="btn btn-success px-4" style={{borderRadius:"0"}}>Login</button>
            </form>
        </div>
    )
}

export default Login
