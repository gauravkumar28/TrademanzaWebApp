import React from 'react';
import logo from './favicon.png';
import './footer.css';
import { FaPinterestP,FaFacebookF,FaLinkedinIn,FaTwitter } from 'react-icons/fa';

const image={
    width:"80px",
    height:"100px"
};

const footercontent={
    margin:"auto",
    fontSize:"10px"
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
const pininterest={
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
    height:"0.5px"
  };
const email={
    background:"gray",
    color:"white",
    border:"none",
    padding:"5px",
    outline:"none",
};
class Footer extends React.Component{
    render(){
    return (
        <div className="main-footer" style={{color:"white"}}>
        <hr style={hr}></hr>

            <br></br>
            <div className="container">
                <div class="row">
                    <div className="col-md-1 col-sm-6" style={{padding:"10px"}}>
                        <img src={logo} style={image} alt="logo"></img>
                    </div>
                    <div className="col-md-3 col-sm-6" style={footercontent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lacus eros, vitae iaculis justo maximus ut. Aliquam erat volutpat.
                    </div>
                    <div className="col-md-4 col-sm-6" style={{padding:"10px"}}>
                        <p style={{fontSize:"12px",letterSpacing:"1px",marginLeft:"10px",paddingBottom:"15px"}}>FOLLOW US</p>
                        
                        <table className="table-borderless" style={table}>
                                <tr>
                                    <th  style={linkedin}><a href="/" style={sociallink}><FaLinkedinIn style={icon}></FaLinkedinIn></a></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th style={pininterest}><a href="/" style={sociallink}><FaPinterestP style={icon}></FaPinterestP></a></th>
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
                        </table>
                    </div>
                    <div className="col-md-3 col-sm-6" style={{padding:"10px"}}>
                    <p style={{fontSize:"12px",letterSpacing:"1px"}}>NEWSLETTER</p>
                    <br></br>
                    <input type="text" id="email" placeholder="E-mail"  style={email}></input>
                    </div>

                </div>
            </div>
            <br></br>
        </div>
    );
    }
}
export default Footer;