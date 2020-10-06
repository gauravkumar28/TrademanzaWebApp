import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from './favicon.png';
import styled from 'styled-components';
import './navbar.css';

const Styles = styled.div`
    .navbar{
        background-color:#181B1F;  
    }
    a, .navbar-brand, .navbar-nav .nav-link{
        color:white;
        text-decoration:none;
        font-weight:bold;
        &:hover{
            color:#5958D4;
        },
    } 
      
`;

const logostyle={
    marginLeft:"10vw",
width: "40px",
height: "40px",
opacity: "1",
};
const hr={
    background:"white",
    color:"white"
};
class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { color1: "#5958D4",color2:"white",color3:"white" };
      }
      home = () => {
        this.setState({ color1: '#5958D4',color2:'white',color3:'white' });
     }
     insights = () => {
        this.setState({ color1: 'white',color2:'#5958D4',color3:'white' });
     }
     login = () => {
        this.setState({ color1: 'white',color2:'white',color3:'#5958D4' });
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
                        <Link to="/loginorsignup" style={{color:this.state.color3}} onClick={this.login}>Log In/Sign Up</Link>
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