import React, { Component } from 'react'
import fire from './config/fire';
import { Container,Row,Col} from 'react-bootstrap';
import logo from './favicon.png';
import './login.css';
const loginbutton={
    fontFamily: '"Gobold", sans-serif',
    fontStyle: 'normal',
    letterSpacing:'0px',
    color:'#5958D4',
    cursor:'pointer'
};
const signupbutton={
    fontFamily: '"Gobold", sans-serif',
    fontStyle: 'normal',
    letterSpacing:'0px',
    color:'#FFFFFF',
    cursor:'pointer',
    opacity: "0.13",
};
const input={
    backgroundColor:"transparent",
    color:"white",
    padding:"15px",
    marginTop:"20px",
    border:"2px solid white",
    borderRadius:"10px",
    outline:"none",
    fontSize:"1.5rem",  
};

const submit={
    marginTop:"20px",
    backgroundColor:"#FFFFFF59",
    border:"none",
    color:"white",
    fontWeight:"bold",
    padding:"15px",
    borderRadius:"8px",
    outline:"none",
    width:"50%",
    fontSize:"20px",
};
class  LoginorSignup extends Component{
    constructor(props){
        super(props);
        this.login= this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email:"",
            password:"",
            showlogin:true,
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
            window.location.href="/";
        }).catch((err)=>{
            console.log(err);
            let code=err.code;
            let res=code.split("/");
            let msg=res[1].replaceAll("-"," ");
            msg=msg.charAt(0).toUpperCase() + msg.slice(1);
            alert(msg);
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
            let code=err.code;
            let res=code.split("/");
            let msg=res[1].replaceAll("-"," ");
            msg=msg.charAt(0).toUpperCase() + msg.slice(1);
            alert(msg);
        })
    }
    loginform=()=>{
        this.setState({showlogin:true});
    }
    signupform=()=>{
        this.setState({showlogin:false});
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        const toggle=this.state.showlogin;

        return(
            <Container style={{marginTop:"20px"}}>
                <Row>
                    <Col xl="8">
                    <form >
                        {toggle ?
                        (<table>
                            <tbody>
                                <tr>
                                    <td>
                                       <span className="loginbtn" style={loginbutton} onClick={this.loginform} >LOGIN</span>

                                    </td>
                                    <td>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </td>
                                    <td>
                                    <span className="signupbtn" style={signupbutton} onClick={this.signupform} >SIGN UP</span>

                                    </td>
                                </tr>
                            </tbody>
                        </table>):(<table>
                            <tbody>
                                <tr>
                                    <td>
                                    <span className="loginbtn"  style={loginbutton} onClick={this.signupform} >SIGN UP</span>

                                    </td>
                                    <td>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </td>
                                    <td>
                                       <span className="signupbtn"  style={signupbutton} onClick={this.loginform} >LOGIN</span>


                                    </td>
                                </tr>
                            </tbody>
                        </table>)
    }
            <input
            type="email"
            id="email"
            name="email"
            style={input}
            placeholder="Enter email" 
            className="input"
            onChange={this.handleChange}
            value={this.state.email} 
            ></input>
            <br></br>
            <input 
            type="password" 
            id="password"
            style={input}
            className="input"
            name="password"
            placeholder="Enter password"
            onChange={this.handleChange}
            value={this.state.password}
            ></input>
            <br></br>
            {toggle ?(
            <button style={submit} class="mybtn" onClick={this.login}>LOG IN</button> 
            ):
            (
            <button style={submit} class="mybtn" onClick={this.signup}>Sign Up</button>           
            )
}
        </form>
       
                    </Col>
                    <Col xl="4" >
                <img src={logo} alt="logo" className="loginlogo" ></img>
            </Col>
                </Row>
            </Container>
        )
    }
    
}
export default LoginorSignup;