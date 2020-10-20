import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from './favicon.png';
import styled from 'styled-components';
import './navbar.css';
import fire from '../config/fire';

const Styles = styled.div`
    .navbar{
        background-color:#181B1F;  
    }
    a, .navbar-brand, .navbar-nav .nav-link{
        color:white;
        text-decoration:none;
        font-weight:bold;
        font-size:35px;
        &:hover{
            color:#5958D4;
        },
    } 
    .nav-link{
        padding-right:50px;

    }
      
`;

const logostyle={
    marginLeft: "140px",
    width: "56px",
    height: "71px",
opacity: "1",
};
const hr={
    background:"white",
    color:"white"
};
class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { user: {}, logstatus:'LoginorSignup' ,color1: "white",color2:"white",color3:"white",color4:"white" };
        console.log(window.location.pathname);

    }
    logout(){
        fire.auth().signOut();
    }
      home = () => {
        this.setState({ color1: '#5958D4',color2:'white',color3:'white',color4:"white" });
     }
     insights = () => {
        this.setState({ color1: 'white',color2:'#5958D4',color3:'white',color4:"white" });
     }
     login = () => {
         if(this.state.logstatus ==='logout'){
             this.logout();
             this.setState({logstatus:'LoginorSignup'});
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
        fire.auth().onAuthStateChanged((user)=>{
          if(user){
            // var displayName = user.displayName;
            // var email = user.email;
            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            this.setState({user,logstatus:"logout"})
            // this.handleOnClick();
          }
          else{
            this.setState({user:null})
          }
        })
      }
    render(){
        return(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} style={logostyle} alt="logo"></img>
            </Navbar.Brand>
            <NavbarToggle aria-controls="basic-navbar-nav" style={{background:"gray"}} />
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
                        <Link to="/events" style={{color:this.state.color4}} onClick={this.events}>Events</Link>
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