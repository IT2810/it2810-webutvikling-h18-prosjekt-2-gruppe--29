import React, { Component } from 'react';
import './App.css';
import '../components/tab.js';
import '../components/tabContainer.js';
import { Tab } from '../components/tab.js';
import { TabContainer } from '../components/tabContainer.js';
import { RadioButton } from '../components/radioButton.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Velkommen til prosjekt 2</h1>
      </div>
    );
  }
}

export default App;
