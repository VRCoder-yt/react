import React from "react";

let curDate = new Date();
// let curDate = new Date(2022, 4, 4, 2); // year, month , date, time
curDate = curDate.getHours();
let greeting = "";
let cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good night";
  cssStyle.color = "black";
}

function App() {
  return (
    <>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </>
  );
}

export default App;
