import React, { Component } from 'react'
import fire from '../../config/fire';
import firebase from 'firebase';
import { Container,Row,Col} from 'react-bootstrap';
import logo from '../images/favicon.png';
import swal from 'sweetalert';
import '../popup.css';
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
            referredCode:"",
            mobileno:"",
            emailid:"",
            showlogin:true,
            otp:""
        }
    }

    validatePhoneNumber=(number)=>{
        var phonenumber = number;
        let pn=/[0-9]{10}/;
        if(phonenumber.length!==10){
            swal({text:"Phone number must be 10 digits"});
            return false;
        }
        else if(!pn.test(phonenumber)){
            swal({text:"Phone number doesn't contain alphabets"});
            return false;
        }
        return true;
    }
    validateEmail=(email)=>{
        let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(email)){
            swal({text:'Invalid Email'});
            return false;
        }
        else{
            return true;
        }
    }
    // componentDidMount(){
    //     fire.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //             window.location.href="/";
    //         }
    //     });
    // }
    onSignUpSubmit = (event) =>{
        event.preventDefault();

        if(this.state.name&&this.state.userName&&this.state.phone&&this.state.email){
        
        fetch(`${process.env.REACT_APP_API2}/users/validate_input`, {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": `${process.env.REACT_APP_API2}`,
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
                swal({text:response.error.errorMsg});
            }
            else{
                if(this.validatePhoneNumber(this.state.phone)&&this.validateEmail(this.state.email)){
                fetch(`${process.env.REACT_APP_API2}/users`, {
                    "method": "POST",
                    "headers": {
                        "x-rapidapi-host":`${process.env.REACT_APP_API2}`,
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    "body": JSON.stringify({
                        name:this.state.name,
                        userName: this.state.userName,
                        phone:"+91"+this.state.phone,
                        email:this.state.email,
                        referralCode:this.state.referredBy
                    })
                    })
                    .then(response => response.json())
                    .then(response => {
                    if(response.hasOwnProperty('error')){
                            swal({text:response.error.errorMsg});
                    }else{
                        this.loginform();
                    }
                    })
                    .catch(err => {
                        
                    });
                }
            }
        })
        .catch(err => {
        });
    }else{
        if(this.state.name==="")
            swal({text:'Name is Required'});
        else if(!this.state.userName)
            swal({text:'Username is Required'});
        else if(!this.state.phone)
            swal({text:'Phone Number is Required'});
        else if(!this.state.email)
            swal({text:'Email is Required'});

    }
        
    }
    setUpRecaptcha=()=>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            //   console.log("captch resolved");
            //   this.onSignInSubmit();
            }
          });
    };
    
    onSignInSubmit = (event) =>{
        // event.preventDefault();

        if(this.validatePhoneNumber(this.state.mobileno)){
        document.getElementById('loginbtn').disabled=true;
        this.setUpRecaptcha();
        var phoneNumber = "+91"+this.state.mobileno;//getPhoneNumberFromUserInput();
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(async function (confirmationResult) {

        var code="";
        await swal({
            title:"Enter OTP",
            content: "input",
            closeOnClickOutside:false,
            closeOnEsc: false,
            buttons: {
                closeModal:"Close",
                confirm: "Submit"
                }
            })
            .then((value) => {
                code=value;
            });
            console.log(code);
            window.confirmationResult = confirmationResult;
            
            // var code = window.prompt("Enter OTP");//getCodeFromUserInput();
            confirmationResult.confirm(code).then(async function (result) {
                console.log('signed in successfully');
                await fire.auth().onAuthStateChanged((user)=>{
                    if(user){
                        user.getIdToken().then(function(idToken) {  
                            localStorage.setItem("authToken",idToken);
                        });
                        fetch(`${process.env.REACT_APP_API2}/users/signin`, {
                        "method": "POST",
                        "headers": {
                            "x-rapidapi-host": `${process.env.REACT_APP_API2}`,
                            "content-type": "application/json",
                            "accept": "application/json"
                        },
                        "body": JSON.stringify({
                            uid:user.uid,
                            phone:user.phoneNumber
                        })
                        })
                        .then(response => response.json())
                        .then(response => {
                            const user_data=response.data;
                            localStorage.setItem("userName", user_data.userName);
                            localStorage.setItem("id",user_data.id);
            window.location.href="/";
                            
                        })
                        .catch(err => {
                        console.log(err);
                        });
                    }
                });
            }).catch(function (error) {
                swal({text:'Entered OTP is invalid'})
                document.getElementById('loginbtn').disabled=false;
            });
            }).catch(function (error) {
                swal({text:error.message});
                document.getElementById('loginbtn').disabled=false;
            });
        }
    };
   
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
                        <div id="loginblock" className="block" style={{display:toggle?'block':'none'}}>
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
                        <div >
                        <div style={{display:"none"}} id="recaptcha-container"></div>
                        <input
                        type="text"
                        maxlength="10"
                        id="mobileno"
                        name="mobileno"
                        style={input}
                        placeholder="Please enter 10 digit Mobile Number" 
                        className="input"
                        onChange={this.handleChange}
                        value={this.state.mobileno} 
                        ></input>

                        <br></br>
            <button id="loginbtn" onClick={this.onSignInSubmit} type="submit" style={submit} className="mybtn" >LOG IN</button>
                        </div>
                        </div>
                        <div id="signupblock" className="block" style={{display:!toggle?'block':'none'}}><table>
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
            type=""
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
            placeholder="Phone Number" 
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
            <input
            type="text"
            id="referralCode"
            name="referralCode"
            style={input}
            placeholder="Referral Code" 
            className="input"
            onChange={this.handleChange}
            value={this.state.referralCode} 
            ></input>
            <br></br>

            <button type="submit" style={submit} className="mybtn" >Sign Up</button>         
            </form>  

                        </div>
                
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