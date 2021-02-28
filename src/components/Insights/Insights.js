
import React, { Component } from 'react';
import {
  Switch, Route 
} from "react-router-dom";
import './insights.css';

import Sidebar from './Sidebar';


import { AllInsights } from './AllInsights';

class Insights extends Component {
   constructor(props) {
     super(props)
     this.state = {
        showSidebar:true,
     }
   }
  render() {

    return (
        
        <div className="news-page"  style={{color:'white'}}>
          {this.state.showSidebar && <Sidebar/>}
          <Switch>
                <Route exact key="latest" path="/insights/latest"  render={ () => (<AllInsights {...this.props}  cate="latest" /> )} />
                <Route exact key="tech" path="/insights/tech"  render={ () => (<AllInsights {...this.props}  cate="tech" /> )} />
                <Route exact key="automobile" path="/insights/automobile" render={ () => (<AllInsights {...this.props}  cate="automobile" /> )} />
                <Route exact key="oilgas" path="/insights/oilgas"   render={ () => (<AllInsights {...this.props}  cate="oil%26gas" /> )} />    
                <Route exact key="telecom" path="/insights/telecom"  render={ () => (<AllInsights {...this.props}  cate="telecom" /> )} />         
                <Route exact key="finance" path="/insights/finance"   render={ () => (<AllInsights {...this.props}  cate="finance"/> )} />               
                <Route exact path="/insights/"  render={ () => (<AllInsights {...this.props} />) }/>
          </Switch>
      </div>
    )
  }
}


export default Insights