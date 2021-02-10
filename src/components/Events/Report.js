import React,{useEffect,useState} from 'react'
import { API2 } from '../../backend';
import './css/portfolio.css';
import {showDayPercentage} from "./helpers";

const Report = () => {
    const [report, setReport] = useState();
    const fetchReport  = () => {
        const contestid=window.location.pathname.split('/')[3];
        fetch(`${API2}/contests/${contestid}/report`)
        .then(res => res.json())
        .then(data  => {
            if(data.error){
                return null;
            }
            setReport(data.data);
        })
    }
    
    useEffect( () => {  
        fetchReport();
    }, []);
    return (
       
        <div className="report-div">
            <div>
            <h1 style={{color:"#000",padding:"2px"}}>Top Customer Picked Stocks</h1>

            {report && report.topCustomerPickedStocks && 
                report.topCustomerPickedStocks.map((stock,index) =>  {
                    return (
                    <div key={index} id="stock" width="30px" >
                                    <div >
                                    <span id="stock-name">{stock.code}</span>
                                    {showDayPercentage(stock.dayTrendPercentage)}

                                    </div>
                        </div>
                    )
                })
            } 
            </div>
            <div >
            <h1 style={{color:"#000",padding:"2px"}}>Top Performing Stocks</h1>
            
            {report && report.topPerformingStocks && 
                report.topPerformingStocks.map((stock,index) =>  {
                    return (
                    <div key={index} id="stock"  >
                                    <div style={{'alignSelf':"flex-end"}}  >
                                    <span id="stock-name">{stock.code}</span>
                                    {showDayPercentage(stock.dayTrendPercentage)}
                                    </div>
                        </div>
                    )
                })
            } 
            </div>
        </div>
    )
}

export default Report
