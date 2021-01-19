import React,{useEffect,useState} from 'react'
import { API2 } from '../../backend';
import './css/portfolio.css';
import {ArrowUpward,ArrowDownward} from '@material-ui/icons';

const Report = () => {
    const [report, setReport] = useState()
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
    useEffect(fetchReport, []);
    const roundToNPlaces = (num,n) => {
        return +(Math.round(num+"e+"+n)+"e-"+n)
    }
    return (
        <div className="report-div">
            <div>
            <span style={{color:"#000"}}>Top Customer Picked Stocks</span>

            {report && report.topCustomerPickedStocks && 
                report.topCustomerPickedStocks.map((stock,index) =>  {
                    return (
                    <div key={index} id="stock" width="30px" >
                                    <div >
                                    <span id="stock-name">{stock.code}</span>
                                    <span id="stock-val">
                                    {
                                        stock.dayTrendPercentage>0 ? <ArrowUpward style={{ fontSize: 15 }} /> 

                                        :<ArrowDownward style={{ fontSize: 15 }} color="primary"/>
                                    }
                                        {stock.dayTrendPercentage>0? roundToNPlaces(stock.dayTrendPercentage,2) : -roundToNPlaces(stock.dayTrendPercentage,2)}
                                    </span>
                                    </div>
                        </div>
                    )
                })
            } 
            </div>
            <div >
            <span style={{color:"#000"}}>Top Performing Stocks</span>
            
            {report && report.topPerformingStocks && 
                report.topPerformingStocks.map((stock,index) =>  {
                    return (
                    <div key={index} id="stock"  >
                                    <div style={{'alignSelf':"flex-end"}}  >
                                    <span id="stock-name">{stock.code}</span>
                                    <span id="stock-val">
                                    {
                                        stock.dayTrendPercentage>0 ? <ArrowUpward style={{ fontSize: 15 }} /> 

                                        :<ArrowDownward style={{ fontSize: 15 }} color="primary"/>
                                    }
                                        {stock.dayTrendPercentage>0? roundToNPlaces(stock.dayTrendPercentage,2) : -roundToNPlaces(stock.dayTrendPercentage,2)}
                                    </span>
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
