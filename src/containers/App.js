import React, { Component } from 'react';
import './App.css';
import {ContentContainer} from '../components/ContentContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Gallery</h1>
        <ContentContainer />
      </div>
    );
  }
}

export default App;
