import React, { Component } from "react";
import Axios from "axios";
import {toast} from "react-toastify";


export default class changePassword extends Component {
    state = {
        info: "",
        field: {
            old_password: "",
            new_password: "",
            confirmnewpassword: ""
        },
        errors: []
    }
    handleChange(event) {
        let field = this.state.field;
        const target = event.target;
        field[target.name] = target.value;
        this.setState({ field });
    }
    serndRequest = async () => {
        return await Axios.post("http://176.9.164.199:3004/auth/update_password", {
            "old_password": this.state.field.password,
            "new_password": this.state.field.newpassword
        })
    }
    makeRequest(e) {
        e.preventDefault()
        let{new_password,confirmnewpassword}=this.state.field;
        if(new_password===confirmnewpassword){
        this.serndRequest()
            .then(res => {
                console.log(res)
            })
            
        }
        else{
            toast.warn("error")
        }
    }



    // chekValiadtion() {
    //     const { old_password, new_password, confirmpassword } = this.state.field
    //     let errors = {}

    //     if (!old_password)
    //         return 'password can not be empty';
    //     else if (password.length < 6) {
    //         return 'password must be at least 6 character';
    //     }
    //     break;
    //     if (!confirmPassword)
    //         return 'confirmPassword can not be empty';
    //      if (password !== confirmPassword)
    //         return 'password and confirmPassword does not match';
        
    //     if (username.length == 0) {
    //         errors["username"] = "username is empty"
    //     }
    //     if (password.length == 0) {
    //         errors["password"] = "password is empty"
    //     }
    //     if (confirmpassword.length == 0) {
    //         errors["confirmpassword"] = "confirmpassword is empty"
    //     }
    //     if (confirmpassword !== password) {
    //         errors["confirmpassword"] = "not same with password"
    //     }
    //     this.setState({ errors, loading: true })
    // }
    render() {
        let { errors } = this.state
        return (


            <form className="background-main2 d-flex w-100 h-100 align-items-center">
                <div className="container-fluid main-login p-5" style={{ height: "300px", width: "300px" }}>
                    <p>changePassword</p>
                    <div className="form-group">
                        <input type="text" name="old_password" className="form-control mb-2"
                            onChange={this.handleChange.bind(this)} placeholder="old password" />
                        <input type="newpassword" name="new_password"
                            onChange={this.handleChange.bind(this)} className="form-control mb-2" placeholder="new password" />

                        <input type="confirmnewpassword" name="confirmnewpassword"
                            onChange={this.handleChange.bind(this)} className="form-control mb-2" placeholder="confirm new password" />
                        {/* <input type="confirmpassword" name="password"
                            onChange={this.handleChange.bind(this)} className="form-control mb-2" placeholder="Confirmpassword" /> */}
                        <button onClick={(e) => this.makeRequest(e)} type="text" className="btn btn-primary btn-block btn-bg btn-sm ">Submit</button>
                        <p className="forgot-password text-left">
                            <a href="#"> Forget password?</a>
                        </p>
                    </div>
                </div>

            </form>
        );
    }
}


