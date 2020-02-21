import React, { Component } from "react";
import Axios from "axios"

export default class Login extends Component {
    state = {
        info: "",
        field: {
            username: "",
            password: "",
        },
        errors: []
    }




    sendRequest = async () => {
        return await Axios.post("http://176.9.164.199:3004/auth/login", {
            "username": this.state.field.username,
            "password": this.state.field.password
        })
    }
    makeRequest(e) {
        e.preventDefault()
        this.sendRequest()
    }
    handleChange(event) {
        let field = this.state.field;
        const target = event.target;
        field[target.name] = target.value;
        this.setState({ field });
    }
    chekValiadtion() {
        const { username, password, confirmpassword } = this.state.field
        let errors = {}
        if (username.length == 0) {
            errors["username"] = "username is empty"
        }
        if (password.length == 0) {
            errors["password"] = "password is empty"
        }
        if (confirmpassword.length == 0) {
            errors["confirmpassword"] = "confirmpassword is empty"
        }
        if (confirmpassword !== password) {
            errors["confirmpassword"] = "not same with password"
        }
        this.setState({ errors, loading: true })
    }
    render() {
        let { errors } = this.state
        return (
            <form className="background-main d-flex w-100 h-100 align-items-center">
                <div className="container-fluid main-login p-5" style={{ height: "300px", width: "300px" }}>
                    <p>LOGIN</p>
                    <div className="form-group">
                        <input type="text" name="username" className="form-control mb-2"
                            onChange={this.handleChange.bind(this)} placeholder="username" />
                        <input type="password" name="password"
                            onChange={this.handleChange.bind(this)} className="form-control mb-2" placeholder="password" />
                        <button onClick={(e) => this.makeRequest(e)} type="text" className="btn btn-primary btn-block btn-sm ">Submit</button>
                        <p className="forgot-password text-left">
                            <a href="#"> Forget password?</a>
                        </p>
                    </div>
                </div>
            </form>
        );
    }
}