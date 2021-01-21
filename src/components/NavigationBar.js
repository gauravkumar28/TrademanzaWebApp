import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';
import { IoIosLogOut } from 'react-icons/io';
import {FaRegUserCircle} from 'react-icons/fa';
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
        this.state = { user: {}, 
        logstatus:'Login' ,
        colors: ["white","white","white","white","white"] ,
        displayname:'',
        phonenumber:'',
        photoURL:null};
    }
    logout(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            if (typeof(Storage) !== "undefined") {
                localStorage.removeItem("userName");
                localStorage.removeItem("id");
                localStorage.removeItem("authToken");
            } else {
                console.log("Sorry, your browser does not support Web Storage...");
            }
          }).catch(function(error) {
            // An error happened.
          });
    }
    change_active = (x) => {
          var  list=["white","white","white","white","white"];
          list[x]='#5958D4';
        this.setState({colors:list});
        if(x===4){
            if(this.state.logstatus ==='Logout'){
                this.logout();
                this.setState({logstatus:'Login'});
                window.location.href="/loginorsignup";
            }
        }
     }
     componentDidMount(){
        if(window.location.pathname==="/")
            this.change_active(0);
        if(window.location.pathname==="/insights")
            this.change_active(1);
        if(window.location.pathname==="/events")
            this.change_active(2);
        if(window.location.pathname==="/trainings")
            this.change_active(3);
        if(window.location.pathname==="/loginorsignup")
            this.change_active(4);
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
            user.getIdToken().then(function(idToken) {  
                localStorage.setItem("authToken",idToken);
            });
            this.setState(user.photoURL);
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
                console.log(user);
                this.setState({displayname:user.name});
                this.setState({phonenumber:user.phone});
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
        <Navbar expand="md" fixed="top" style={{borderBottom:"1px solid white"}}>
            <Navbar.Brand href="/">
                <img src={logo} style={logostyle} alt="logo"></img>
            </Navbar.Brand>
            <NavbarToggle aria-controls="basic-navbar-nav" style={{background:"white"}} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{marginRight:"144px"}}>
                <Nav.Item >
                    <Nav.Link >
                        <Link  exact to="/" style={{color:this.state.colors[0]}} onClick={(e) =>this.change_active(0)} >Home</Link>
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >
                        <Link to="/insights" style={{color:this.state.colors[1]}} onClick={(e) =>this.change_active(1)}>Insights</Link>
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/events"  style={{color:this.state.colors[2]}} onClick={(e) => this.change_active(2)}>Events</Link>
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>
                    <Link to="/trainings" style={{color:this.state.colors[3]}} onClick={(e) => this.change_active(3)}>Trainings</Link>
                    </Nav.Link>
            </Nav.Item>

            {this.state.logstatus ==='Login'?(
                <Nav.Item>
                <Nav.Link>
                    <Link to="/loginorsignup" style={{color:this.state.colors[4]}} onClick={(e) => this.change_active(4)}>{this.state.logstatus}</Link>
                    </Nav.Link>
            </Nav.Item>
            ):(
                <NavDropdown alignRight
  title={
    this.state.photoURL === null ?(<FaRegUserCircle />):
(<img src={this.state.photoURL} className="useravatar" alt="user" />)}
  id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#" className="user-info" ><div className="displayname">{this.state.displayname}</div>
        <div className="phone">{this.state.phonenumber}</div></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  className="logout-info" href="#" onClick={(e) => this.change_active(4)}><IoIosLogOut /> Logout</NavDropdown.Item>
      </NavDropdown>

            )}
                
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <hr style={hr}></hr>
        <br></br>
        <br></br>

    </Styles>);
    }
}
export default NavigationBar;