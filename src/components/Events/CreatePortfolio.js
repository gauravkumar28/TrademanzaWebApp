import React, { Component } from 'react'
import './css/portfolio.css';
import {ArrowUpward,ArrowDownward} from '@material-ui/icons';

export default class CreatePortfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             stocksList:undefined,
             selectedStocks:[],
             portfolioName:"portfolio",
             error:"",
             currentStock:""
        }
        this.fetchStocks=this.fetchStocks.bind(this)
    }   
    componentDidMount(){
        this.fetchStocks();
    }
    fetchStocks = () => {
        fetch("https://stgapi.trademanza.com/stocks?type=NiftyFifty")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.setState({
                stocksList:data.data
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
        else if(this.state.selectedStocks.length===3){
            stock.isTrump=true;
            this.setState(prevState => ({
                selectedStocks:[...prevState.selectedStocks,stock]

            }))
        }
        else{
            this.setState(prevState => ({
                selectedStocks:[...prevState.selectedStocks,stock]

            }))
        }
    }   
    handlePortfolioNameChange = (e) => {
        this.setState({
            portfolioName:e.target.value
        })
    }
    createAportfolio = () => {
        const eventid=window.location.pathname.split('/')[2];
        const contestid=window.location.pathname.split('/')[3];
        // this.setState({
        //     ...selectedStocks,
        //     selectedStocks[0]isTrump:true
        // })
        fetch("https://stgapi.trademanza.com/portfolios/",{
            method:"POST",
            headers: {
                Accept:"application/json",
                // "authtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhZDBjYjdjMGY1NTkwMmY5N2RjNTI0NWE4ZTc5NzFmMThkOWM3NjYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdHJhZGVtYW56YS0yNDAwMDYiLCJhdWQiOiJ0cmFkZW1hbnphLTI0MDAwNiIsImF1dGhfdGltZSI6MTYwMDUzMzY3MywidXNlcl9pZCI6Im5ZNHNITm5JamxWUlFEd3F0elc0ZnRDNGxUcjEiLCJzdWIiOiJuWTRzSE5uSWpsVlJRRHdxdHpXNGZ0QzRsVHIxIiwiaWF0IjoxNjA2OTI0MjMwLCJleHAiOjE2MDY5Mjc4MzAsInBob25lX251bWJlciI6Iis5MTgwOTc4MDIzOTgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTgwOTc4MDIzOTgiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwaG9uZSJ9fQ.WtNnf93Et6wpkRfDdsn3a3SpcrPMN6ZSc1rSqrxbxMRR_uj9gB7x5IjppuJTr7A3WwhORHsL9_zi8i0Ksw7EeWVPOdNmLzSiKXt6BtEZRvtOsZNg2J0t1PeiIVjWnqutDJaZBzgi3EGn7C4FGTIa9FezScVgMr-j8f1kPJqiwemMlbUYrPeHlmYpkrItUDZlTgpQ0TROKyBpy66If0KHlVeX5K8AqRfPpIwWXLbhAzPUPmO9T0z6onddY4hQnzdJUP35swe0z699J7gkuXWoaW4Z4JtLCbnoTADwytf6v-DuzMMblGThEkk8QA0KkqdC5KPrw0vl7fSkrdUcsVl17Q",
                "authtoken":localStorage.getItem("authToken"),
                "istesting":"false",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "contestId":contestid,  
                "eventId":eventid,
                "name":this.state.portfolioName,
                "selectedStocks":this.state.selectedStocks,
                // "userId":"5f8c45de46dcee5f2ab11517"
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
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
            <div className="portfolio-box">
                <div className="portfolio-details">
                    <input type="text" onChange={this.handlePortfolioNameChange} placeholder="enter your portfolio name"  className="portfolioNameInput" />
                    {this.state.currentStock ? 
                    <iframe src={this.state.currentStock.referenceUrl}  title={ this.state.currentStock.name}  width="95%" height="80%"  >sunpharama</iframe>
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
                                    <div style={{'alignSelf':"flex-end"}}>
                                    <span id="Selectedstock-name">{stock.name}</span>
                                    <span id="Selectedstock-val"> 
                                    {
                                        stock.dayTrend>0 ? <ArrowUpward style={{ fontSize: 15 }} /> 

                                        :<ArrowDownward style={{ fontSize: 15 }} />
                                    }
                                        {stock.dayTrend>0? stock.dayTrend : -stock.dayTrend}
                                    </span>
                                    </div>
                                    {/* <div >
                                        <button id="Selectedstock-sub" >Trump</button>
                                    </div> */}
                                </div>
                            )
                        }) : <div>No stocks avial</div>
                    }

                    {this.state.selectedStocks.length===4 && <button onClick={this.createAportfolio} className="SubmitButton">Create Portfolio</button>}
                    </div>
                    <div className="stock-option-heading2">
                        <p style={{fontSize:"10px",color:"red"}}>{this.state.error}</p>
                    AVAILABLE STOCKS
                    
             
                    
                    <div className="stock-listing">
                    

                    {
                        this.state.stocksList ?
                        this.state.stocksList.map((stock,index)=>{
                            return (
                                <div key={index} id="stock">
                                    <button class="stock-describe" onClick={ () => {
                                        console.log("hello world")
                                        this.setState({
                                            currentStock:stock
                                        })
                                    }}>
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



 