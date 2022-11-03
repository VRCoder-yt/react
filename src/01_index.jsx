import React from "react"; // for using jsx
import ReactDOM from "react-dom"; // for acces id in html


const fname = "Rohit"
const lname = "bhure"

const currDate = new Date().toDateString();
const currTime = new Date().toTimeString();
const img1 = "data:image/png;base64,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"
const link1 = "https://www.webxgrafix.com"

// inline css using object and attribure style={}
const heading = {
  color: "#aaa",
  margin: "30px"
}

// // JSX
ReactDOM.render(
    // also use <>....</>
  <React.Fragment>
    <h1 style={heading}>Hello world {`${fname} ${lname}`} {fname}</h1>
    <p>current date is {currDate}</p>
    <p>current Time is {currTime}</p>
    <p>my lucky number is {4+5} & {Math.random()}</p>
    <img src={img1} alt="coder"/>
    <a href={link1}>hello</a>
  </React.Fragment>,
  // document.getElementById("root")
);

// project no 1
// ReactDOM.render(
//     <>
//     <h1>Webx Grafix </h1>
//     <p>marks : - </p>
//     <ol>
//         <li>about</li>
//         <li>about</li>
//         <li>about</li>
//         <li>about</li>
//     </ol>
//     </>,
//     document.getElementById("root")
// )

//----------

// babel compiled code
//ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Hello world"), document.getElementById("root"));

//----------

// pure javascript
// const h1 = createElement("h1")
// h1.innerHTML = "Hello World!"
// document.getElementById("root").appendChild(h1)
