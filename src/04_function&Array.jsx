import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import sdata from "./sdata";

// using fat arrow function
// const ncard = (val) => {
//   return (
//     <Card
//       title={val.title}
//       imgsrc={val.imgsrc}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// };

// using function
// function ncard(val) {
//   return (
//     <Card
//       title={val.title}
//       imgsrc={val.imgsrc}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// }

ReactDOM.render(
  <>
    {/* using array */}
    {/* <App
  title={sdata[0].title}
  imgsrc={sdata[0].imgsrc}
  sname={sdata[0].sname}
  link={sdata[0].link}
/> */}

    {/* map mathod */}
    {/* {sdata.map(ncard)} */}

    {/* using map functon */}
    {/* 
    {sdata.map(function ncard(val){
      return (
        <Card
          title={val.title}
          imgsrc={val.imgsrc}
          sname={val.sname}
          link={val.link}
        />
      );
    })} */}

    {/* using map ,arrow function*/}
    {sdata.map((val, index) => {
      console.log(index)
      return (
        <Card
          key={val.id}
          title={val.title}
          imgsrc={val.imgsrc}
          sname={val.sname}
          link={val.link}
        />
      );
    })}

    {/* <App
      title="Demon Slayer"
      imgsrc="https://i.ytimg.com/vi/XjvaJH8aRc0/maxresdefault.jpg"
      sname="Available on Netflix "
      link="https://www.mxplayer.in/"
    /> */}
  </>,
  document.getElementById("root")
);
