import React, { Component } from "react";


export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>username</label>
                    <input type="email" className="form-control" placeholder="Enter your username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <a href="#"> Forgot password?</a>
                </p>
            </form>
        );
    }
}