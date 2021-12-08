import './App.css';
import React, { Component } from 'react';
import Squat from './Squat';
import Bench from './Bench';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {isToggle: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({isToggle: !this.state.isToggle});
  }

  render(){
  return (
    <div className="App">
      <div className="container">
      <h1 className="title">Squat - Strength Ratios</h1>
      <button className="button is-dark has-text-centered" onClick={this.handleClick}>
        Swap
      </button>
      <div style={{display: this.state.isToggle ? 'none' : 'block'}} className="container">
        <Squat />
      </div>
      <div style={{display: this.state.isToggle ? 'block' : 'none'}} className="container">
      <Bench />
      </div>
      </div>
    </div>
  )};
}

export default App;
