import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";


import Root from './Root.js'
import en from "./content/en.json";



function AppRouter() {
  return (
  <LocalizeProvider>
    <Router>
      <React.Fragment>
        <Root/>
      </React.Fragment>
    </Router>
    </LocalizeProvider>
  );
}

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;
