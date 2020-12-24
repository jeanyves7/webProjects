import React, { Component } from "react";
import Aps from "./Appcompo";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <div className="App">  
                <Aps />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <Link to="/">
                                <button className="btn btn-primary btn-block">Sign Up</button>
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
}