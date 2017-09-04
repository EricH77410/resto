import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header';
import Home from '../components/Home';
import Menu from './Menu'
import Footer from '../components/Footer';

import Food from './Food';

// Sample data
import {food, drink, focusFood} from '../sample';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      food:[],
      drink:[],
      focusFood:'',
      order:''
    };
  }

  componentWillMount(){
    this.setState({food:food(),drink:drink(),focusFood:focusFood()})
  }

  render() {
    return (
      <div id="background">
        <div id="page">
          <Header title="My-Resto"/>
          <Home focus={this.state.focusFood}/>
          <Food food={this.state.food}/>
          <Menu items={this.state.food}/>
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
