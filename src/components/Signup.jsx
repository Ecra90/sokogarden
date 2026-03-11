import { Link } from "react-router-dom";
import React,{useState} from 'react';
const SignUp = () => {
// hooks
const [username,setusername]=useState("")
const [email,SetEmail]=useState("")
const [password,SetPassword]=useState("")
const [phone,SetPhone]=useState("")

    return (
        <div className="d-flex justify-content-center row text-center " >
            <div className="card shadow col-md-6 mt-4" >
                <form action="" className="card-body">
                    <h1>Sign In</h1>
                    <input type="text" placeholder="Enter your username" className="form-control"
                        required />
                    <br /><br />
                    <input type="email" placeholder="Enter your email" className="form-control"
                        required />
                    <br /><br />
                    <input type="password" placeholder="Enter your password"
                        className="form-control"
                        required />
                    <br /><br />
                    <input type="text" placeholder="Enter your phone number" className="form-control"
                        required />
                    <br /><br />
                    &nbsp;
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    <p className='text-center'>
                    Already have an account?&nbsp; &nbsp;<Link to='/signin'>sign in</Link></p>
                </form>
                
            </div>
        </div>
    )
}
export default SignUp;