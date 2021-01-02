import React,{useState}  from "react";
import Aps from "./Appcompo";
import { Link } from "react-router-dom";
import {checkIn} from "../actions/actions"
import {useDispatch,useSelector} from "react-redux";
import LogSnack from "../components/snackBar/LogInSnack"

const  Login=()=>  {
  
    const [email,SetEmail]=useState("");
    const [password,SetPassword]=useState("");

    const dispatch = useDispatch();

    const handleEmail=(e)=>{
        SetEmail(e.target.value)
    }

    const handlePass=(e)=>{
        SetPassword(e.target.value)
    }


    const handleSubmit=()=>{
        const data={
            Email:email,
            pass:password
        }
        console.log(data)
        dispatch(checkIn(data))
    }
        return (
            <div className="App">
              
                <Aps />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail}/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={handlePass}/>
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <Link to="/cart">
                                <button className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
                            </Link>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

export default Login