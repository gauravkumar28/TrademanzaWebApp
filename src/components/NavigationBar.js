import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from './images/favicon.png';
import styled from 'styled-components';
import './navbar.css';
import firebase from 'firebase';
import fire from '../config/fire';

const Styles = styled.div`
    .navbar{
        background-color:#181B1F;  
    }
    a, .navbar-brand, .navbar-nav .nav-link{
        color:white;
        text-decoration:none;
        font-family:'Segoe UI',sans-serif;
        font-style:'normal';
        font-weight:bold;
        font-size:25px;
        &:hover{
            color:#5958D4;
        },
    } 
    .nav-link{
        padding-right:50px;
    }
      
`;

const logostyle={
    marginLeft: "7vw",
    width: "37px",
    height: "45px",
opacity: "1",
};
const hr={
    background:"white",
    color:"white",
    border:"1px solid #FFFFFF",
};
class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { user: {}, logstatus:'Log In/Sign Up' ,color1: "white",color2:"white",color3:"white",color4:"white" };
        

    }
    logout(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            if (typeof(Storage) !== "undefined") {
                localStorage.removeItem("userName");
                localStorage.removeItem("id");
            } else {
                console.log("Sorry, your browser does not support Web Storage...");
            }
          }).catch(function(error) {
            // An error happened.
          });
    }
      home = () => {
        this.setState({ color1: '#5958D4',color2:'white',color3:'white',color4:"white" });
     }
     insights = () => {
        this.setState({ color1: 'white',color2:'#5958D4',color3:'white',color4:"white" });
     }
     login = () => {
         if(this.state.logstatus ==='Logout'){
             this.logout();
             this.setState({logstatus:'Log In/Sign Up'});
         }
        this.setState({ color1: 'white',color2:'white',color3:'#5958D4',color4:"white" });
     }
     events=()=>{
         this.setState({color1:'white',color2:'white',color3:'white',color4:'#5958D4'})
     }
     componentDidMount(){
        if(window.location.pathname==="/")
            this.home();
        if(window.location.pathname==="/insights")
            this.insights();
        if(window.location.pathname==="/events")
            this.events();
        if(window.location.pathname==="/loginorsignup")
            this.login();
        this.authListener();
      }
    // handleOnClick = useCallback(() => useHistory().push('/'), [useHistory()]);
    authListener(){
        if (typeof(Storage) !== "undefined") {
            // Store
        console.log(localStorage.getItem("id"));
            
            // Retrieve
        } else {
            console.log("Sorry, your browser does not support Web Storage...");
        }
        
          
        fire.auth().onAuthStateChanged((user)=>{
          if(user){
            fetch("https://stgapi.trademanza.com/users/signin", {
                "method": "POST",
                "headers": {
                    "x-rapidapi-host": "stgapi.trademanza.com",
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
                user=response.data;
                if (typeof(Storage) !== "undefined") {
                    localStorage.setItem("userName", user.userName);
                    localStorage.setItem("id",user.id);
                } else {
                    console.log("Sorry, your browser does not support Web Storage...");
                }
                })
                .catch(err => {
                console.log(err);
                });
            this.setState({user,logstatus:"Logout"})
          }
          else{
            this.setState({user:null})
          }
        });
      }
    render(){
        return(
            // style={{position:"fixed",width:"100%",top:"0",left:"0",background:"#181B1F",zIndex:"1"}}
    <Styles >
        <Navbar expand="lg" >
            <Navbar.Brand href="/">
                <img src={logo} style={logostyle} alt="logo"></img>
            </Navbar.Brand>
            <NavbarToggle aria-controls="basic-navbar-nav" style={{background:"white"}} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{marginRight:"144px"}}>
                <Nav.Item >
                    <Nav.Link >
                        <Link exact to="/" style={{color:this.state.color1}} onClick={this.home} >Home</Link>
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/insights" style={{color:this.state.color2}} onClick={this.insights}>Insights</Link>
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/events"  style={{color:this.state.color4}} onClick={this.events}>Events</Link>
                        </Nav.Link>
                </Nav.Item>
                  
                <Nav.Item>
                <Nav.Link>
                    <Link to="/loginorsignup" style={{color:this.state.color3}} onClick={this.login}>{this.state.logstatus}</Link>
                    
                    </Nav.Link>
            </Nav.Item>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <hr style={hr}></hr>
    </Styles>);
    }
}
export default NavigationBar;