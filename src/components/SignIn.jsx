import { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
    const [username, setusername] = useState("")
    const [password, SetPassword] = useState("")
    return (
        <div className="d-flex justify-content-center row text-center " >
            <div className="card shadow col-md-6 mt-4">
                <form action="" className="card-body">
                    <h1>Sign In</h1>
                    <input type="text" placeholder="Enter your username" className="form-control"
                        required value={username} onChange={(e) => setusername(e.target.value)} />
                    <br /><br />
                    {username}
                    <input type="text" placeholder="Password" className="form-control" required value={password} onChange={(e) => SetPassword(e.target.value)} />
                    {password}
                    <br /> <br />
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <p>Don't have an account?</p>
                    <Link to='/signin'>sign in</Link>
                </form>
            </div>
        </div>
    )
}
export default SignIn;