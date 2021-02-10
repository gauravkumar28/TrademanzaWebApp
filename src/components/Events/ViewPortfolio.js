import React, { Component } from 'react'
import './css/portfolio.css';
import { API2 } from '../../backend';
import {Link} from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import swal from 'sweetalert';
import coin from './images/coin.svg';
import {showDayPercentage} from "./helpers";


export default class ViewPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
             portfolio:'',
             contest:'',
             walletContest:''
        }
    }
    fetchContest = () => {
        const userId=localStorage.getItem("id");
        const contestid=window.location.pathname.split('/')[3];
        fetch(`${API2}/contests/v2/${contestid}?userId=${userId}`)
        .then(res => res.json())
        .then(data => {
            if(data.error){
                return null;
            }
            this.setState({
                contest:data.data
            })
            return data.data;
        })
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
    fetchWallet  = () => {
        const authToken = localStorage.getItem("authToken");
        const userId = localStorage.getItem("id");
        const contestid=window.location.pathname.split('/')[3];
        fetch(`${API2}/users/${userId}/wallet?contestId=${contestid}`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "authtoken":authToken
                }
            }    
        ).then(res => res.json())
        .then(data => this.setState({walletContest:data.data}))
        .catch(err => console.log(err))
    }
    componentDidMount() {
        this.fetchPortfolio();
        this.fetchContest();
        this.fetchWallet();
    }
    participateInContest = () => {
        const eventId=window.location.pathname.split('/')[2];
        const contestId=window.location.pathname.split('/')[3];
        const portfolioId=this.state.portfolio[0].id;
        const el = document.createElement('div');
        const wallet=this.state.walletContest;
        el.innerHTML=`
            <h3 class="username-showing">Participate</h3>
            <div class="participate-tab">
            <p> Entry Fees: <span>&#8377;</span> ${this.state.contest.participationFee} </p>
            <br/>
            <p> TM Coins:<img src=${coin} width="20px" height="20px" alt="coin svg"  /> ${wallet.tmCoin} </p>
            <p> Wallet Balance: <span>&#8377;</span> ${wallet.balance} </p>
            <p> Wallet Bonus: <span>&#8377;</span> ${wallet.bonus} </p>
            <p> Wallet earnings: <span>&#8377;</span>${wallet.earnings} </p>
            <br/>
            <p> TM Coins Deduction: <img src=${coin} width="20px" height="20px" alt="coin svg"  /> ${wallet.tmCoinDeducted} </p>
            <p> Wallet Balance Deduction: <span>&#8377;</span> ${wallet.balanceDeducted} </p>
            <p> Wallet Bonus Deduction: <span>&#8377;</span> ${wallet.bonusDeducted} </p>
            <p> Wallet earnings Deduction: <span>&#8377;</span> ${wallet.earningsDeducted} </p>
            <br/>
            <p> Required Amount: <span>&#8377;</span> ${wallet.requiredAmount} </p>
            </div>
            `;
        swal("", {
            buttons: {
                Participate: true,
            },
            content:el
          }).then( clicked => {if(clicked){
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
         .then(data => {

                window.location.reload();
            //  window.location.reload();
            })
         
        .catch(err => console.log("error ",err))
     }})
    }
    render() {
        const eventId=window.location.pathname.split('/')[2];
        const contestId=window.location.pathname.split('/')[3];
        return (
            <div>
            <div className="portfolio-box">
                <div className="portfolio-details">
                    {this.state.portfolio && this.state.portfolio.length>0  && <p className="portfolioNameInput" >{this.state.portfolio[0].name}</p> }
                </div>
                <div className="stocks-list">
                    STOCK PICKED
                    <div className="stock-option-heading">
                    {
                        (this.state.portfolio && this.state.portfolio.length>0 && this.state.portfolio[0].selectedStocks)?
                        this.state.portfolio[0].selectedStocks.map((stock,index)=>{
                            return (
                                <div key={index} id="stock">
                                    <div style={{'alignSelf':"flex-end"}}>
                                    <span id="stock-name">{stock.name}</span>
                                    {showDayPercentage(stock.dayTrendPercentage)}
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
                    {
                        this.state.contest.showJoinContestButton &&
                        <button   className="SubmitButton"  onClick={() => {this.participateInContest();}}>
                            Participate
                        </button>
                    }
                    {

                    }
                    {this.state.contest.showEditPortfolioButton  &&   
                        <Link className="EditPortfolioButton" to={`/events/${eventId}/${contestId}/editportfolio`}>
                            Edit Portfolio
                        </Link>
                    }
                </div>
            </div>
            </div>
        )
    }
}
