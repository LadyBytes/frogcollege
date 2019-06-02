import React, { Component } from "react";

import {Route} from 'react-router-dom'
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";

import Root from './Root.js'
import en from "./content/en.json";

import Index from "./pages/Index.js";
import About from "./pages/About.js";
import EpisodeLog from "./pages/EpisodeLog.js";


function Pages() {
  return (
    <React.Fragment>
      <Index/>
      <EpisodeLog/>
      <About/>
    </React.Fragment>

  );
}
// function Pages() {
//   return (
//     <React.Fragment>
//       <Route path="/" exact component={Index} />
//       <Route path="/episodes/" component={EpisodeLog} />
//       <Route path="/about/" component={About} />
//     </React.Fragment>

//   );
// }

class App extends Component {
  constructor(props) {
  super(props);
  this.props.initialize({
    languages: [{ name: "English", code: "en" }],
    translation: en,
    options: {
      renderToStaticMarkup,
      renderInnerHtml: true
    }
  });
 }
  
render() {
  return <Pages />;
  }
}

export default withLocalize(App);
