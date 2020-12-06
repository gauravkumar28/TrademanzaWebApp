import React, { Component } from 'react';
import './insights.css'

class Insights extends Component {

    render() {
        return(
            <div className="containerzzz" >
                <div className="container2">
                    <div >
                        <h1 className="titles2">All Topics</h1>
                         <h1> Latest </h1>
                         <h1> Tech </h1>
                         <h1> Automobile </h1>
                         <h1> Oil & Gas </h1>
                         <h1> More </h1>
                    </div>
                    <h1 className="titles1"><a href = "https://mail.google.com/mail/?view=cm&fs=1&to=help@trademanza.com&su=Publish an Inisght">Publish an Insight</a></h1>
                </div>
                <div className="card-container">
                    <div>
                    <h2>
                    v\\\\Print media has seen highest number of advertisers 
                    at 30900+ compared to other media segments in 
                    October-November 2020 period
                    </h2>
                    <p>
                    HT Media is one of the stocks to look at
                    </p>
                    </div>
                    <div>
                    <h2>
                    UltraTech has announced capacity expansion of 12.8 MT 
                    (brownfield and greenfield) at a capex of Rs 5477 crore
                    </h2>
                    <p>
                    This is in addition to the ongoing 6.7 MT capex in east
                    & north India. The total increase in capacity would be 
                    11.4 MT clinker and 19.5 MT cement by FY23 end
                    </p>
                    </div>
                    
                    
                </div>
                <div className="card-container2">
                <div>
                    <h2>
                    State Bank of India Yono app has faced a system outage and 
                    steps are being taken for restoration of the related services
                    </h2>
                    <p>
                    SBI that has a customer base of ~49 crore, processes at least 
                    4 lakh transactions on its digital offerings on a daily basis. 
                    About 55% of the bank transactions are currently being conducted 
                    through the digital channel and half of it is contributed by Yono
                    </p>
                    </div>
                    <div>
                    <h2>
                    The Oil Minister has said that oil linked pricing of 
                    LNG for Asian consumers needs immediate revision given 
                    the spot LNG prices
                    </h2>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Insights
