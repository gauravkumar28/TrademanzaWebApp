
import React, { Component } from 'react';
import {
  Switch, Route 
} from "react-router-dom";
import './insights.css';

import Sidebar from './Sidebar';


import {AllEvents} from './allevents';
import {Tech} from './tech';
import {Telecom} from './telecom';
import {Latest} from './latest';
import {Automobile} from './automobile';
import {OilGas} from './oilgas';
import {Finance} from './finance';

class Insights extends Component {
   constructor(props) {
     super(props)
     this.state = {
        showSidebar:true,
     }
   }
   hideSidebar = () => {
      this.setState({
          showSidebar:false,
      })
   }
   showSidebar = () =>{
    this.setState({
        showSidebar:true,
    })
   }
  render() {

    return (
        
        <div className="news-page"  style={{color:'white'}}>
          {this.state.showSidebar && <Sidebar/>}
          <Switch>
                <Route exact path="/insights/"  render={ () => (<AllEvents {...this.props} showSidebar={this.showSidebar}/>) }/>
                <Route exact path="/insights/latest"  render={ () => (<Latest {...this.props} showSidebar={this.showSidebar}/> )} />
                <Route exact path="/insights/tech"  render={ () => (<Tech {...this.props} showSidebar={this.showSidebar}/> )} />
                <Route exact path="/insights/automobile" render={ () => (<Automobile {...this.props} showSidebar={this.showSidebar}/> )} />
                <Route exact path="/insights/oilgas"   render={ () => (<OilGas {...this.props} showSidebar={this.showSidebar}/> )} />    
                <Route exact path="/insights/telecom"  render={ () => (<Telecom {...this.props} showSidebar={this.showSidebar}/> )} />         
                <Route exact path="/insights/finance"   render={ () => (<Finance {...this.props} showSidebar={this.showSidebar}/> )} />               

          </Switch>
      </div>
    )
  }
}


export default Insights