import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from "./components/Login";
import withAuthenticateHOC from "./components/withAuthenticate/withAuthenticateHOC";

const HOCComponent = withAuthenticateHOC(Login)(Content)

const App = () => {
  
  return (
    <div className="App">
      <TopBar />
      <Header />
      <HOCComponent />
    </div>
  );
}

export default App;
