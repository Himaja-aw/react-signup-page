import React from 'react';
import './index.css';

 function SignupPage() {

    return (
    <div>
            <div className="card d-flex col-md-6" style={{marginTop:'80px',marginLeft:'300px',border:'2px solid black'}}>
                <h1 style={{marginTop:'20px'}} >SIGN-UP</h1>
                
                <div className="justify-content-center text-left shadow-lg p-3 mb-5 bg-white rounded">

                   
                    <input type="text" placeholder='UserName' className='form-control mt-2'/>
   

                    <input type="text" placeholder='Email' className='form-control mt-2'/>

                    <input type="password" placeholder='Password' className='form-control mt-2'/>
              

                    <input type="password" placeholder='Re-Enter Password' className='form-control mt-2'/>
                   

                    <button className='btn btn-success mt-3'>SignUp</button>

                </div>
                <div className=" row justify-content-center mb-4">
                    <a href="login-page">i have already a account</a>
                </div>
           </div>
    </div>
    );
}
export default SignupPage;