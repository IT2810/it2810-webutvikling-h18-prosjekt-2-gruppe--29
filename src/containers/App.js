import React, { Component } from 'react';
import './App.css';
import MenuHeader from '../components/MenuHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Velkommen til prosjekt 2</h1>
        <MenuHeader menuHeaderTitle="abc" />
      </div>
    );
  }
}

export default App;
