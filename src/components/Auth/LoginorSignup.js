import React, { Component } from 'react'
import firebase from 'firebase';
import { Container,Row,Col,Modal, Spinner} from 'react-bootstrap';
import logo from '../images/favicon.png';
import swal from 'sweetalert';
import '../popup.css';
import './login.css';

class  LoginorSignup extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handlemobileno=this.handlemobileno.bind(this);
        this.handlephone=this.handlephone.bind(this);
        this.handleemail=this.handleemail.bind(this);
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
            mobilenomsg:'',
            phonemsg:'',
            emailmsg:'',
            modalShow:false,
            otp:"",
            show:false,
            loadingmsg:''

        }
    }
     handleClose = () => {
        this.setState({show:false});
    }
   handleShow = () => {
       this.setState({show:true});
   }
   loginform=()=>{
    this.setState({showlogin:true});
}
signupform=()=>{

    this.setState({showlogin:false});
}
setModalShow=(flag)=>{
    this.setState({modalShow:flag});
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })

    
}
   handlemobileno=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
    var phonenumber = e.target.value;
    let pn=/^\d+$/;
    if(phonenumber!==''){
        if(!pn.test(phonenumber)){
            this.setState({mobilenomsg:"Phone number doesn't contain alphabets"});
        }
        else{
            this.setState({mobilenomsg:" "});
        }
    }
   }
   handlephone=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
    var phonenumber = e.target.value;
    let pn=/^\d+$/;
    if(phonenumber!==''){
        if(!pn.test(phonenumber)){
            this.setState({phonemsg:"Phone number doesn't contain alphabets"});
        }
        else{
            this.setState({phonemsg:" "});
        }
    }
   }
   handleemail=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
    var email =e.target.value;
    if(email!==""){
        let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!regEmail.test(email)){
            this.setState({emailmsg:'Invalid Email'});
        }
        else{
            this.setState({emailmsg:''});
        }
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
        }
        else{
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
     handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        document.getElementById('loginbtn').click();
      }
    };
    handleKeypress2 = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        document.getElementById('otpbtn').click();
      }
    };
    componentDidMount(){
        window.appVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible"
             }
          );
    }
    handleSignUp = event => {
        var self=this;
        if(this.validatePhoneNumber(this.state.mobileno)){
            self.setState({loadingmsg:"Sending OTP ..."});
            self.setModalShow(true);
        event.preventDefault();
       const appVerifier = window.appVerifier;
       firebase
         .auth()
         .signInWithPhoneNumber("+91"+this.state.mobileno, appVerifier)
         .then(function(confirmationResult) {
           console.log("Success");
           // SMS sent. Prompt user to type the code from the message, then sign the
           // user in with confirmationResult.confirm(code).
           window.confirmationResult = confirmationResult;
           self.setModalShow(false);
           self.setState({loadingmsg:""});
           self.handleShow();
         })
         .catch(function(error) {
           console.log(error);
           self.setModalShow(false);
           self.setState({loadingmsg:""});
           swal({text:error.code});
         });
    }
};
onVerifyCodeSubmit = event => {
    var self = this;
       event.preventDefault();
       const verificationId = this.state.otp;
       window.confirmationResult
         .confirm(verificationId)
         .then(function(result) {
           // User signed in successfully.
           var user = result.user;
           
           user.getIdToken().then(idToken => {
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
                            if(response.msg && response.msg ==="New User"){
                                firebase.auth().signOut().then(function() {
                                });
                                self.handleClose();
                                self.signupform();
                            }
                            else{
                                self.handleClose();
                                self.setState({loadingmsg:"Redirecting ... "});
                                self.setModalShow(true);
                                localStorage.setItem("authToken",idToken);
                                self.props.history.goBack();
                                self.setModalShow(false);
                            }
                            
                        })
                        .catch(err => {
                        console.log(err);
                        });
                        
             });

         })
         .catch(function(error) {
           // User couldn't sign in (bad verification code?)
           console.error("Error while checking the verification code", error);
           self.handleClose();
           swal({text:error.code});
           
         });

       };
    
    render(){
        const toggle=this.state.showlogin;

        return(
            <>
      <Modal
        show={this.state.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >

        <Modal.Body
        style={{background:"#181B1F",margin:"-2px",padding:"30px"}}
        >
        <h2 style={{color:"white"}}>Enter OTP</h2>
        <input
        type="text"
        maxlength="6"
        id="otp"
        name="otp"
        placeholder="Please enter 6 digit password" 
        className="input"
        onChange={this.handleChange}
        onKeyDown={this.handleKeypress2}
        value={this.state.otp} 
        ></input>
        <br></br>
        <br></br>
        <button className="formbtn" style={{float:"left"}} onClick={this.handleClose}>
            Close
          </button>
          <button id="otpbtn" className="formbtn" onClick={this.onVerifyCodeSubmit} style={{float:"right"}} >Submit</button>
          
        </Modal.Body>

      </Modal>
            <Container style={{marginTop:"20px"}}>
                <Row>
                    <Col xl="6" lg="6" md="6">
                        <div id="loginblock" className="block" style={{display:toggle?'block':'none'}}>
                            <table>
                            <tbody>
                                <tr>
                                    <td>
                                    <span className="loginbtn" onClick={this.loginform} >LOGIN</span>
                                    </td>
                                    <td>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </td>
                                    <td>
                                    <span className="signupbtn" onClick={this.signupform} >SIGN UP</span>
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
                        placeholder="Please enter 10 digit Mobile Number" 
                        className="input"
                        onChange={this.handlemobileno}
                        onKeyDown={this.handleKeypress}
                        value={this.state.mobileno} 
                        ></input>
                        <label style={{color:"white"}}>{this.state.mobilenomsg}</label>
                        <br></br>
            <button id="loginbtn"  type="submit" onClick={this.handleSignUp} className="mybtn" >LOG IN</button>
                        </div>
                        </div>
                        <div id="signupblock" className="block" style={{display:!toggle?'block':'none'}}><table>
                            <tbody>
                                <tr>
                                    <td>
                                    <span className="loginbtn"   onClick={this.signupform} >SIGN UP</span>

                                    </td>
                                    <td>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </td>
                                    <td>
                                       <span className="signupbtn"  onClick={this.loginform} >LOGIN</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            <form onSubmit={this.onSignUpSubmit}>
            <input
            type="text"
            id="name"
            name="name"
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
            placeholder="Username" 
            className="input"
            onChange={this.handleChange}
            value={this.state.userName} 
            ></input>
            <br></br>
            <input
            type="text"
            maxlength="10"
            id="phone"
            name="phone"
            placeholder="Phone Number" 
            className="input"
            onChange={this.handlephone}
            value={this.state.phone} 
            ></input>
            <label style={{color:"white"}}>{this.state.phonemsg}</label>
            <br></br>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Email" 
            className="input"
            onChange={this.handleemail}
            value={this.state.email} 
            ></input>
            <label style={{color:"white"}}>{this.state.emailmsg}</label>
            <input
            type="text"
            id="referralCode"
            name="referralCode"
            placeholder="Referral Code" 
            className="input"
            onChange={this.handleChange}
            value={this.state.referralCode} 
            ></input>
            <br></br>

            <button type="submit" className="mybtn" >Sign Up</button>         
            </form>  

                        </div>
                
            <br></br>
            <br></br>
       
                    </Col>
                    <Col xl="6" lg="6" md="6">
                        <center>
                        <img src={logo} alt="logo" className="loginlogo" />

                        </center>
            </Col>
                </Row>
            </Container>
      <MyVerticallyCenteredModal
        show={this.state.modalShow}
        onHide={() => this.setModalShow(false)
        }
        loadingmsg={this.state.loadingmsg}
/>
            </>
        )
    }
    
}
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
        centered
      >
        
        <Modal.Body
        style={{background:"#181B1F",margin:"-2px",padding:"30px"}}
        >
            <center>
            <Spinner animation="border"
            size="xl"
            style={{borderBlockStartColor:"white",width:"100px",height:"100px"}}
             />
             <br></br>
             <br></br>
            <h6 style={{color:"white"}}>{props.loadingmsg}</h6>
            </center>
        </Modal.Body>
        
      </Modal>
    );
  }
  
  
export default LoginorSignup;