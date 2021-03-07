import React from 'react';
import logo from './images/favicon.png';
import './footer.css';
import { FaInstagram,FaFacebookF,FaLinkedinIn,FaTwitter } from 'react-icons/fa';

const image={
    marginLeft:"147px",
    width:"80px",
    height:"100px"
};

const footercontent={
    margin:"auto",
    fontSize:"15px"
};
const table={
    marginTop:"15px"
};
const icon={
    margin:"10px",
    fontSize:"20px",
};

const linkedin={
    background:"#2867B2",
    borderRadius:"50%",
};
const instagram={
    background:"#BD081C",
    borderRadius:"50%",
};
const twitter={
    background:"#1DA1F2",
    borderRadius:"50%",
};
const facebook={
    background:"#4267B2",
    borderRadius:"50%",
};
const sociallink={
    color:"white",
};
const hr={
    background:"white",
    color:"white",
    border:"1px solid white"
  };
const email={
    background:"gray",
    color:"white",
    border:"none",
    padding:"5px",
    height:"37px",
    outline:"none",
};
class Footer extends React.Component{
    render(){
    return (
        <div className="footer" style={{color:"white"}}>
        <hr style={hr}></hr>

            <br></br>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-6" style={{padding:"10px"}}>
                        <img src={logo} style={image} alt="logo"></img>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6" style={footercontent}>
                    Over 1000+ users have already subscribed to our newsletter
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6" style={{padding:"10px"}}>
                        <p style={{fontSize:"15px",letterSpacing:"1px",marginLeft:"10px",paddingBottom:"15px"}}>FOLLOW US</p>
                        
                        <table className="table-borderless" style={table}>
                            <tbody>
                                <tr>
                                    <th  style={linkedin}><a href="/" style={sociallink}><FaLinkedinIn style={icon}></FaLinkedinIn></a></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th style={instagram}><a href="/" style={sociallink}><FaInstagram style={icon}></FaInstagram></a></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th style={twitter}><a href="/" style={sociallink}><FaTwitter style={icon}></FaTwitter></a></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th style={facebook}><a href="/" style={sociallink}><FaFacebookF style={icon}></FaFacebookF></a></th>
                                </tr>
                                </tbody>
                        </table>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6" style={{padding:"10px"}}>
                    <p style={{fontSize:"15px",letterSpacing:"1px"}}>NEWSLETTER</p>
                    <br></br>
                    <input type="text" id="useremail" name="useremail" placeholder="E-mail" style={email}  className="newsletter"></input>
                    </div>

                </div>
            </div>
            <br></br>
        </div>
    );
    }
}
export default Footer;