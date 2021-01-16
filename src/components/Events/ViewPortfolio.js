import React, { Component } from 'react'
import './css/portfolio.css';
import {ArrowUpward,ArrowDownward} from '@material-ui/icons';
import { API2 } from '../../backend';
import { Fragment } from 'react';
import {Link} from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';


export default class ViewPortfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             portfolio:''
        }
    }
    fetchPortfolio = () => {
        const contestid=window.location.pathname.split('/')[3];
        const userId=localStorage.getItem("id");
        
        fetch(`${API2}/portfolios?userId=${userId}&contestId=${contestid}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                portfolio:data.data
            })
        }) 

    
    }
    componentDidMount() {
        this.fetchPortfolio();
        this.checkRegistration();
    }
    checkRegistration = () => {
        
    }
    participateInContest = () => {
        const eventId=window.location.pathname.split('/')[2];
        const contestId=window.location.pathname.split('/')[3];
        const portfolioId=this.state.portfolio[0].id;
        
         fetch(`${API2}/participations/`,{
            method:"POST",
            headers:{
                Accept:"application/json",
                "authtoken":localStorage.getItem("authToken"),
                "istesting":"false",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "contestId":contestId,
                "eventId":eventId,
                "portfolioId":portfolioId,
                "userId":localStorage.getItem("id")
            })
         }).then(res => res.json())
         .then(data => console.log(data))
         .catch(err => console.log("error ",err))
    }
    roundToNPlaces = (num,n) => {
        return +(Math.round(num+"e+"+n)+"e-"+n)
    }
    render() {
        const eventId=window.location.pathname.split('/')[2];
        const contestId=window.location.pathname.split('/')[3];
        return (
            <div>
            <div className="portfolio-box">
                <div className="portfolio-details">
                
                    {console.log(this.state.portfolio)}
                    {this.state.portfolio && this.state.portfolio.length>0  && <p className="portfolioNameInput" >{this.state.portfolio[0].name}</p> }
                </div>
                <div className="stocks-list">
                    STOCK PICKS
                    <div className="stock-option-heading">
                    {
                        (this.state.portfolio && this.state.portfolio.length>0 && this.state.portfolio[0].selectedStocks)?
                        this.state.portfolio[0].selectedStocks.map((stock,index)=>{
                            return (
                                <div key={index} id="stock">
                                    <div style={{'alignSelf':"flex-end"}}>
                                    <span id="stock-name">{stock.name}</span>
                                    <span id="stock-val">

                                    {
                                        stock.dayTrendPercentage>0 ? <ArrowUpward style={{ fontSize: 15 }} /> 

                                        :<ArrowDownward style={{ fontSize: 15 }} color="secondary"/>
                                    }
                                        {stock.dayTrendPercentage>0? this.roundToNPlaces(stock.dayTrendPercentage,2) : -this.roundToNPlaces(stock.dayTrendPercentage,2)}
                                    </span>
                                    </div>
                                    <span className="TrumpStar">
                                    
                                    {stock.isTrump?<StarIcon style={{color:"#EDBD46"}}/>:
                                            <StarBorderIcon style={{color:"#EDBD46"}} />
                                    }
                                    </span>  
                                </div>
                            )
                        }) : <div>No stocks avial</div>
                    }
                    
                    </div>
                    {this.state.portfolio && this.state.portfolio.length>0  && 
                       <Fragment>
                        <button   className="SubmitButton"  onClick={() => {this.participateInContest();}}>
                            Participate
                        </button>
                        <Link className="EditPortfolioButton" to={`/events/${eventId}/${contestId}/createportfolio`}>
                            Edit Portfolio
                        </Link>
                    
                        </Fragment>
                    
                    }
                </div>
                    
            </div>
           
            </div>
        )
    }
}
