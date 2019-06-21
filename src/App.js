import React,{Component} from 'react';
//import logo from './logo.svg';
import Home from './Component/Home';
import Header from './Component/Header';
import Services from './Services';
//import Footer from './Component/Footer';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Contact from './Component/Contact';
import About from './Component/About';
import Activities from'./Component/Activities';

export default class Footer extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <Route active exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/activities" component={Activities}/>
      </div>
      </Router>
    )
  }
}

