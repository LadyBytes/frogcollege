import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";

import Root from "./Root.js";
import en from "./content/en.json";
import $ from "jquery";

import anime from "animejs";
function AppRouter() {
  return (
    <LocalizeProvider>
      <Router>
        <React.Fragment>
          <Root />
        </React.Fragment>
      </Router>
    </LocalizeProvider>
  );
}

class App extends Component {
  componentDidMount() {
    // Wrap every letter in a span
    $(".ml6 .letters").each(function() {
      $(this).html(
        $(this)
          .text()
          .replace(/([^\x00-\x80]|\w|!)/g, "<span class='letter'>$&</span>")
      );
    });

    anime.timeline({ loop: false }).add({
      targets: ".ml6 .letter",
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 900,
      delay: function(el, i) {
        return 50 * i;
      }
    });
    // .add({
    //   targets: ".ml6",
    //   opacity: 0,
    //   duration: 1000,
    //   easing: "easeOutExpo",
    //   delay: 1000
    // });

    $(document).ready(function() {
     

      var FLAG_wobblyness = 10; //range of movement from centre
      var FLAG_intervalRate = 150;
      var $wobblyText = $(".wobblyText");
      var wobblyTextSpans = ".wobblyText span";

      var interval = 0;

      init();

      /***** startup stuff ******/

      function init() {
        var wobbleHTML = addSpans(splitString($wobblyText.text()));
        replaceWobbleTextHTML(wobbleHTML);

        interval = setInterval(intervalFunction, FLAG_intervalRate);
      }

      //split string into array
      function splitString(strInput) {
        return strInput.trim().split("");
      }

      //make a string of each character inside a span
      function addSpans(arrInput) {
        var strInputSpans = "";

        function addSpan(charInput) {
          strInputSpans += "<span>" + charInput + "</span>";
        }

        arrInput.forEach(addSpan);

        return strInputSpans;
      }

      /***** element HTML & CSS modification ******/

      function setWobbleCSS($element, top, left) {
        $element.css("top", top);
        $element.css("left", left);
      }

      function replaceWobbleTextHTML(strInputHTML) {
        $wobblyText.html(strInputHTML);
      }

      /***** maths ******/

      //return random number within range min and max
      function intRandomRange(range) {
        return Math.random() * (range * 2) - range;
      }

      /***** main loop ******/

      function intervalFunction() {
        $(wobblyTextSpans).each(function(index) {
          setWobbleCSS(
            $(this),
            intRandomRange(FLAG_wobblyness),
            intRandomRange(FLAG_wobblyness)
          );
        });
      }
    });
  }

  render() {
    return <AppRouter />;
  }
}

export default App;
