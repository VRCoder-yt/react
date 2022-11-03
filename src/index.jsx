import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  // for server rendering
} from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
import Navbar from "./Navbar";
ReactDOM.render(
  <>
    <BrowserRouter>
      <Navbar />
      {/* <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch> */}
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
