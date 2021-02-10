import React,{Fragment} from 'react';
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
        this.state = { 
        logstatus:'Login',
        colors: ["white","white","white","white","white"] ,
        displayname:'',
        phonenumber:'',
        photoURL:null,
        wallet:''
        };
    }
    logout=()=>{
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
            console.log(error);
          });
    }
    change_active = (x) => {
          var  list=["white","white","white","white","white"];
          list[x]='#5958D4';
        this.setState({colors:list});

        if(x===4){
            if(this.state.logstatus ==='Logout' ){
                this.logout();
                this.setState({logstatus:'Login'});
            window.location.href="/";
            }
        }
     }
     componentDidMount(){

        if(window.location.pathname==="/")
            this.change_active(0);
        else if(window.location.pathname==="/insights")
            this.change_active(1);
        else if(window.location.pathname==="/events")
            this.change_active(2);
        else if(window.location.pathname==="/trainings")
            this.change_active(3);
        else if(window.location.pathname==="/loginorsignup")
            this.change_active(4);
        this.authListener();

      }
    // handleOnClick = useCallback(() => useHistory().push('/'), [useHistory()]);
    authListener=async()=>{
        
            fire.auth().onAuthStateChanged((user)=>{
            if(user){
                console.log(user);
                this.setState({logstatus:"Logout",photoURL:user.photoURL});
                fetch(`${process.env.REACT_APP_API2}/users/signin`, {
                "method": "POST",
                "headers": {
                    "x-rapidapi-host":`${process.env.REACT_APP_API2}`,
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
                    let users=response.data;
                    const user_data=response.data;
                    localStorage.setItem("userName", user_data.userName);
                    localStorage.setItem("id",user_data.id);
                    this.setState({displayname:users.name,phonenumber:users.phone,wallet:users.wallet});
                })
                .catch(err => {
                console.log(err);
                });
                
                }
            });
    }
    render(){
        return(
            // style={{position:"fixed",width:"100%",top:"0",left:"0",background:"#181B1F",zIndex:"1"}}
    <Styles >
        <Navbar expand="md"  >
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
        <div className="phone">{this.state.phonenumber}</div>
                {this.state.wallet ? 
                    <Fragment>
                    <div className="displayname">Wallet Details</div>
                    <div className="phone">Bonus : {this.state.wallet.bonus }</div>
                    <div className="phone">Balance : {this.state.wallet.balance}</div>
                    <div className="phone">WithdrawableAmount :{this.state.wallet.withdrawableAmount}</div>
                    <div className="phone">TmCoins :{this.state.wallet.tmCoin}</div>
                    <div className="phone">Earnings :{this.state.wallet.earnings}</div>
        
                    </Fragment>
                    :null
                }        
        <div>

        </div>
        </NavDropdown.Item>

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