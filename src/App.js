import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from "./pages/Index.js";
import About from "./pages/About.js";
import EpisodeLog from "./pages/EpisodeLog.js";



function AppRouter() {
  return (
    <Router>
      <React.Fragment>
       
        <Route path="/" exact component={Index} />

        <Route path="/episodes/" component={EpisodeLog} />
        <Route path="/about/" component={About} />
      </React.Fragment>
    </Router>
  );
}

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;
