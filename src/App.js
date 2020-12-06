import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Home from './components/Homepage/Home';
import Insights from './components/Insights/Insights';
import LoginorSignup from './components/Auth/LoginorSignup';
import Trainings from './components/Trainings/Trainings';
import Events from './components/Events/Events.js';
import {Layout} from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';


class App extends Component{  
  render(){
    return(
      <React.Fragment>
        <Router>
        <NavigationBar/>
        <Layout >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/insights" component={Insights} />
            <Route  path="/events" component={Events} />
            <Route  path="/trainings" component={Trainings} />
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
