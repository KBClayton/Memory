import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import PicList from '.Piclist.json'





class App extends Component {
  state = {
    PicList={PicList},
    CurrentShow={}
  };



  Click = event =>{

  }
  Shuffle = id => {
    for(let i; ){
      while
    }
  
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Memory Game</h1>
        </header>
        {this.state.friends.map(friend => (
          <Card
            click={this.removeFriend}
            src={piclist.}

          />
        ))}
        {Piclist.map( pic => Card)}
      </div>
    );
  }
}

export default App;
