import React, { Component } from 'react'
import './css/portfolio.css';
import {ArrowUpward,ArrowDownward} from '@material-ui/icons';
import { API2 } from '../../backend';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
export default class CreatePortfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             stocksList:undefined,
             selectedStocks:[],
             portfolioName:"portfolio",
             error:"",
             mainStocksList:undefined,
             currentStock:"",
             success:"",
             portfolio:"",
             currTrump:0
        }
        this.fetchStocks=this.fetchStocks.bind(this)
    }   
    componentDidMount(){
        this.fetchStocks();
    }
    fetchStocks = () => {
        fetch(`${API2}/stocks?type=NiftyFifty`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.setState({
                stocksList:data.data,
                mainStocksList:data.data
            })
            // console.log(this.state.stocksList);
        })
    }
    selectTheStock = (stock) =>  {
        if(this.state.selectedStocks.length===4){
            this.setState({
                error:"your list is full,plz create your portfolio"
            })
        }
        else{
            this.setState(prevState => ({
                selectedStocks:[...prevState.selectedStocks,stock]

            }))
        }
    }  
    removeTheStock = (index) => {
        let selectedStocksAfterRemove=this.state.selectedStocks;
        let selectedStocksAfterRemove1=selectedStocksAfterRemove.filter((stock,ind) =>  ind!==index );;
        this.setState({
            selectedStocks:selectedStocksAfterRemove1
        });
    } 
    makeItTrump  = (index) => {
        this.setState({
            currTrump:index
        })
    }
    handlePortfolioNameChange = (e) => {
        this.setState({
            portfolioName:e.target.value
        })
    }
    handleSearchQueryChange = (e) => {
        let currlist=this.state.mainStocksList.filter(stock => stock.name.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1);        
        this.setState({
            stocksList:currlist
        })
    } 
    createAportfolio = () => {
        const eventid=window.location.pathname.split('/')[2];
        const contestid=window.location.pathname.split('/')[3];
        let selectedStocks=this.state.selectedStocks;
        selectedStocks[this.state.currTrump].isTrump=true;
        fetch(`${API2}/portfolios/`,{
            method:"POST",
            headers: {
                Accept:"application/json",
                "authtoken":localStorage.getItem("authToken"),
                "istesting":"false",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "contestId":contestid,  
                "eventId":eventid,
                "name":this.state.portfolioName,
                "selectedStocks":selectedStocks,
                "userId":localStorage.getItem("id")
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error){
                this.setState({
                    error:data.error.errorMsg
                })
            }
            else{
                this.setState({
                    success:"Portfolio Successfully Created",
                    portfolio:data
                })
            }
        })
        .catch(err => console.log(err))
    }
    roundToNPlaces = (num,n) => {
        return +(Math.round(num+"e+"+n)+"e-"+n)
    }
    render() {
        return (
            <div>
            <div className="portfolio-box">
                <div className="portfolio-details">
                    <input type="text" onChange={this.handlePortfolioNameChange} value={this.state.portfolioName} placeholder="enter your portfolio name"  className="portfolioNameInput" />
                    {this.state.currentStock ? 
                    <iframe src={this.state.currentStock.referenceUrl+"&output=embed"}  title={ this.state.currentStock.name}  width="95%" height="80%"  >sunpharama</iframe>
                    :null
                    }
                </div>
            
                <div className="stocks-list">
                    <div className="stock-option-heading">
                    SELECTED STOCKS   
                    {
                        this.state.selectedStocks ?
                        this.state.selectedStocks.map((stock,index)=>{
                            return (
                                <div key={index} id="Selectedstock">
                                    <div >
                                        <span id="Selectedstock-name">{stock.name}</span>
                                        <span id="Selectedstock-val"> 
                                        {
                                            stock.dayTrendPercentage>0 ? <ArrowUpward style={{ fontSize: 15 }} /> 

                                            :<ArrowDownward style={{ fontSize: 15 }}  color="secondary" />
                                        }
                                            {stock.dayTrendPercentage>0? this.roundToNPlaces(stock.dayTrendPercentage,2) : -this.roundToNPlaces(stock.dayTrendPercentage,2)}
                                        </span>
                                    </div>
                                    <div className="removeAndTrump" >
                                        <span className="TrumpStar">
                                        {
                                            this.state.currTrump===index?<StarIcon style={{color:"#EDBD46"}}/>:
                                            <StarBorderIcon style={{color:"#EDBD46"}} onClick={ ()=> this.makeItTrump(index)}/>
                                        }
                                        </span>
                                        <button id="stock-remove" onClick={() => {
                                            this.removeTheStock(index);
                                            if(index===this.state.currTrump) this.makeItTrump(0);
                                        }}>-</button>
                                    </div>
                                </div>
                            )
                        }) : <div>No stocks avial</div>
                    }

                    {this.state.selectedStocks.length===4 && <button onClick={this.createAportfolio} className="SubmitButton">Create Portfolio</button>}
                    </div>
                    <div className="stock-option-heading2">
                        {this.state.error?alert(this.state.error):null}
                        {this.state.success?alert(this.state.success):null}
                        {/* <p style={{fontSize:"20px",color:"red",width:"30%"}}>{this.state.error}</p> */}
                        AVAILABLE STOCKS
                    <div >
                        <input className="Stock-Search-Box" type="text" placeholder="Search Stock By Name" onChange= {this.handleSearchQueryChange}/>
                    </div>
             
                    
                    <div className="stock-listing">
                    

                    {
                        this.state.stocksList ?
                        this.state.stocksList.map((stock,index)=>{
                            return (
                                <div key={index} id="stock">
                                    <button className="stock-describe" onClick={ () => {
                                        console.log("hello world")
                                        this.setState({
                                            currentStock:stock
                                        })
                                    }}>
                                    <div style={{'alignSelf':"flex-end"}}>
                                    <span id="stock-name">{stock.name}</span>
                                    <span id="stock-val"> 
                                    {
                                        stock.dayTrendPercentage>0 ? <ArrowUpward style={{ fontSize: 15 }} /> 

                                        :<ArrowDownward style={{ fontSize: 15 }} color="secondary" />
                                    }
                                        {stock.dayTrendPercentage>0? this.roundToNPlaces(stock.dayTrendPercentage,2) : -this.roundToNPlaces(stock.dayTrendPercentage,2)}
                                    </span>
                                    </div>
                                   </button>
                                    <div >
                                       

                                        <button id="stock-sub" onClick={() => {
                                            this.selectTheStock(stock)
                                        }}>+</button>
                                    </div>
                                </div>
                            )
                        }) : <div>No stocks avial</div>
                    }
                    </div>
                    </div>
                </div>
            </div>
           
            </div>
        )
    }
}



 