import React,{useState}  from "react"
import Aps from "./Appcompo";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {signUp} from "../actions/actions"

const SignUp = ()=> {
    const [firstName,setFName]=useState("");
    const [lastName,setLName]=useState("");
    const [Email,SetEmail]=useState("");
    const [pass,SetPassword]=useState("");

    const dispatch = useDispatch();

    const handleF=(e)=>{
        setFName(e.target.value)
    }

    const handleL=(e)=>{
        setLName(e.target.value)
    }

    const handleEmail=(e)=>{
        SetEmail(e.target.value)
    }

    const handlePass=(e)=>{
        SetPassword(e.target.value)
    }

   const handleS=()=>{
       const data={
           email:Email,
           password:pass,
           firstN:firstName,
           lastN:lastName
       }
       dispatch(signUp(data))
   }

        return (
            <div className="App">  
                <Aps />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" onChange={handleF} />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" onChange={handleL} />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={handlePass} />
                            </div>

                            <Link to="/">
                                <button className="btn btn-primary btn-block" onClick={handleS}>Sign Up</button>
                            </Link>
                            <p className="forgot-password text-right">
                                Already registered <a href="/signin">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
export default SignUp