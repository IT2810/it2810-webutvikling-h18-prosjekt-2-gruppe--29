import React, { Component } from 'react';
import './App.css';
import RadioButton from './../components/radioButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Velkommen til prosjekt 2</h1>
        <RadioButton text="Løvenes Konge" />
      </div>
    );
  }
}

export default App;
