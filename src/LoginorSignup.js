import React, { Component } from 'react'
import fire from './config/fire';

class  LoginorSignup extends Component{
    constructor(props){
        super(props);
        this.login= this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email:"",
            password:"",
            error:""
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
            let code=err.code;
            let res=code.split("/");
            let msg=res[1].replaceAll("-"," ");
            msg=msg.charAt(0).toUpperCase() + msg.slice(1);
            this.setState({error:msg});
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
        <form>
            <p style={{color:"white"}}>{this.state.error}</p>
            
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email" 
            onChange={this.handleChange}
            value={this.state.email} 
            ></input>
            <input 
            type="password" 
            id="password"
            name="password"
            placeholder="Enter password"
            onChange={this.handleChange}
            value={this.state.password}
            ></input>
            <button onClick={this.login}>Login</button> 
            <button onClick={this.signup}>Signup</button>           
        </form>
            </div>
        )
    }
    
}
export default LoginorSignup;