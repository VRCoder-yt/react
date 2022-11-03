// import React from "react";
// import ReactDOM from "react-dom";
// import youtuber, { Age, myname, names } from "./App";

// ReactDOM.render(
//   <>
//     <ol>
//       <li>{youtuber}</li>
//       <li>{Age}</li>
//       <li>{names()}</li>
//       {myname()}
//     </ol>
//   </>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import * as xyz from "./03_App"; 

ReactDOM.render(
  <>
    <ol>
      <li>{xyz.default}</li>
      <li>{xyz.Age}</li>
      <li>{xyz.names()}</li>
      {xyz.myname()}
    </ol>
  </>,
  document.getElementById("root")
);
