import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Home from './Home';
import Insights from './Insights';
import LoginorSignup from './LoginorSignup';
import Events from './Events.js';
import {Layout} from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';


class App extends Component{  
  render(){
    return(
      <React.Fragment>
        <Router>
        <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/insights" component={Insights} />
            <Route  path="/events" component={Events} />
            <Route  path="/loginorsignup" component={LoginorSignup} />
          </Switch>
        </Layout>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
