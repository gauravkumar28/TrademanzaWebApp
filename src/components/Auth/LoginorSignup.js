import React, { Component } from 'react'
import fire from '../../config/fire';
import firebase from 'firebase';
import { Container,Row,Col} from 'react-bootstrap';
import logo from '../images/favicon.png';
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
    width:"100%",
    fontSize:"20px",
};
class  LoginorSignup extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            name:"",
            userName:"",
            phone:"",
            email:"",
            fcmToken:"",
            referredBy:"",
            mobileno:"",
            emailid:"",
            showlogin:true,
        }
    }
    componentDidMount(){
        this.authListener();
    }
    authListener(){
            
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
            window.location.href="/";   

            }
        })
    }
    setUpRecaptcha=()=>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            //   console.log("captch resolved");
              this.onSignInSubmit();
            }
          });
    };
    onSignUpSubmit = (event) =>{
        event.preventDefault();
        
        fetch("https://stgapi.trademanza.com/users/validate_input", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "stgapi.trademanza.com",
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify({
            userName: this.state.userName,
        })
        })
        .then(response => response.json())
        .then(response => {
            if(response.hasOwnProperty('error')){
                alert(response.error.errorMsg);
            }
            else{
                fetch("https://stgapi.trademanza.com/users", {
                    "method": "POST",
                    "headers": {
                        "x-rapidapi-host": "stgapi.trademanza.com",
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    "body": JSON.stringify({
                        name:this.state.name,
                        userName: this.state.userName,
                        phone:this.state.phone,
                        email:this.state.email,
                    })
                    })
                    .then(response => response.json())
                    .then(response => {
                    if(response.hasOwnProperty('error')){
                        alert(response.error.errorMsg);
                    }else{
                        this.loginform();
                    }
                    })
                    .catch(err => {
                        
                    });
            }
        })
        .catch(err => {
        });
        
        
    }
    onSignInSubmit = (event) =>{
        // console.log(this.state.mobileno);
        document.getElementById('loginbtn').disabled=true;
        event.preventDefault();
        this.setUpRecaptcha();
        var phoneNumber = this.state.mobileno;//getPhoneNumberFromUserInput();
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {

            window.confirmationResult = confirmationResult;
            var code = window.prompt("Enter OTP");//getCodeFromUserInput();
            confirmationResult.confirm(code).then(function (result) {
                console.log('signed in successfully');
                var user = firebase.auth().currentUser;
                
                console.log(user);
             window.location.href="/";   
            
            }).catch(function (error) {
                alert('Entered OTP is invalid');
                document.getElementById('loginbtn').disabled=false;
            });
            }).catch(function (error) {
                alert("SMS couldn't sent, Try again!");
                document.getElementById('loginbtn').disabled=false;
            });
    };
    // login(e){
    //     e.preventDefault();
    //     fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
    //         console.log(u);
    //         window.location.href="/";
    //     }).catch((err)=>{
    //         console.log(err);
    //         let code=err.code;
    //         let res=code.split("/");
    //         let msg=res[1].replaceAll("-"," ");
    //         msg=msg.charAt(0).toUpperCase() + msg.slice(1);
    //         alert(msg);
    //     })
    // }
    // signup(e){
    //     e.preventDefault();
    //     fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
    //         console.log(u);
    //     }).catch((err)=>{
    //         console.log(err);
    //         let code=err.code;
    //         let res=code.split("/");
    //         let msg=res[1].replaceAll("-"," ");
    //         msg=msg.charAt(0).toUpperCase() + msg.slice(1);
    //         alert(msg);
    //     })
    // }
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
                    <Col xl="5" lg="5" md="5">
                        {toggle ?
                        (<div>
                            <table>
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
                        </table>
                        <form onSubmit={this.onSignInSubmit}>
                        <div id="recaptcha-container"></div>
                        <input
                        type="tel"
                        id="mobileno"
                        name="mobileno"
                        style={input}
                        placeholder="+911234567890" 
                        className="input"
                        onChange={this.handleChange}
                        value={this.state.mobileno} 
                        ></input>

                        <br></br>
            <button id="loginbtn" type="submit" style={submit} class="mybtn" >LOG IN</button>
                        </form>
                        </div>):(
                        <div><table>
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
                        </table>
            <form onSubmit={this.onSignUpSubmit}>
            <input
            type="text"
            id="name"
            name="name"
            style={input}
            placeholder="Name" 
            className="input"
            onChange={this.handleChange}
            value={this.state.name} 
            ></input>
            <br></br>

            <input
            type="text"
            id="userName"
            name="userName"
            style={input}
            placeholder="Username" 
            className="input"
            onChange={this.handleChange}
            value={this.state.userName} 
            ></input>
            <br></br>

            <input
            type="tel"
            id="phone"
            name="phone"
            style={input}
            placeholder="+911234567890" 
            className="input"
            onChange={this.handleChange}
            value={this.state.phone} 
            ></input>
            <br></br>
            <input
            type="email"
            id="email"
            name="email"
            style={input}
            placeholder="Email" 
            className="input"
            onChange={this.handleChange}
            value={this.state.email} 
            ></input>
            <br></br>

            <button type="submit" style={submit} class="mybtn" >Sign Up</button>         
            </form>  

                        </div>)
    }
                
            <br></br>
            <br></br>
       
                    </Col>
                    <Col xl="7" lg="7" md="7">
                <img src={logo} alt="logo" className="loginlogo" ></img>
            </Col>
                </Row>
            </Container>
        )
    }
    
}
export default LoginorSignup;