import React, { Component } from 'react'
import './css/portfolio.css';
import {ArrowUpward,ArrowDownward} from '@material-ui/icons';
import { API2 } from '../../backend';




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
        // const userId="5f8c45de46dcee5f2ab11517";
        
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
    render() {
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
                                        stock.dayTrend>0 ? <ArrowUpward style={{ fontSize: 15 }} /> 

                                        :<ArrowDownward style={{ fontSize: 15 }} />
                                    }
                                        {stock.dayTrend>0? stock.dayTrend : -stock.dayTrend}
                                    </span>
                                    </div>
                                    
                                </div>
                            )
                        }) : <div>No stocks avial</div>
                    }
                    {this.state.portfolio && this.state.portfolio.length>0  && 
                    <button   className="SubmitButton" onClick={() => {this.participateInContest();}}>
                            Participate
                    </button>
                    }
                    </div>
                   
                </div>
            </div>
           
            </div>
        )
    }
}
