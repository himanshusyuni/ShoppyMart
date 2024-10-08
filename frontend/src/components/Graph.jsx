import React, { useEffect, useState } from "react";
import Vertex from "./Vertex";
import ShortestDist from "./ShortestDist";
import Shopping from "./Shopping";

function Graph({ cart,setCurritem }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let changed= 1024/screenWidth;
  const arr = [
    { no: 1, x: 50, y: 40 },
    { no: 5, x: 150, y: 40 },
    { no: 9, x: 270, y: 40 },
    { no: 13, x: 390, y: 40 },
    { no: 17, x: 510, y: 40 },
    { no: 21, x: 630, y: 40 },
    { no: 25, x: 750, y: 40 },
    { no: 2, x: 50, y: 140 },
    { no: 6, x: 150, y: 140 },
    { no: 10, x: 270, y: 140 },
    { no: 14, x: 390, y: 140 },
    { no: 18, x: 510, y: 140 },
    { no: 22, x: 630, y: 140 },
    { no: 26, x: 750, y: 140 },
    { no: 3, x: 50, y: 200 },
    { no: 7, x: 150, y: 260 },
    { no: 11, x: 270, y: 260 },
    { no: 15, x: 390, y: 260 },
    { no: 19, x: 510, y: 260 },
    { no: 23, x: 630, y: 260 },
    { no: 27, x: 750, y: 200 },
    { no: 4, x: 50, y: 340 },
    { no: 8, x: 150, y: 340 },
    { no: 12, x: 270, y: 340 },
    { no: 16, x: 390, y: 340 },
    { no: 20, x: 510, y: 340 },
    { no: 24, x: 630, y: 340 },
    { no: 28, x: 750, y: 340 },
    { no: 8, x: 10, y: 40 },
    { no: 7, x: 10, y: 180 },
    { no: 6, x: 10, y: 300 },
    { no: 9, x: 90, y: 10 },
    { no: 10, x: 220, y: 10 },
    { no: 11, x: 350, y: 10 },
    { no: 12, x: 480, y: 10 },
    { no: 13, x: 600, y: 10 },
    { no: 14, x: 750, y: 10 },
    { no: 15, x: 810, y: 50 },
    { no: 16, x: 810, y: 190 },
    { no: 17, x: 810, y: 300 },
    { no: 1, x: 580, y: 390 },
    { no: 2, x: 450, y: 390 },
    { no: 3, x: 320, y: 390 },
    { no: 4, x: 200, y: 390 },
    { no: 5, x: 60, y: 390 },
    { no: 18, x: 100, y: 250 },
    { no: 19, x: 100, y: 120 },
    { no: 20, x: 220, y: 250 },
    { no: 21, x: 220, y: 120 },
    { no: 22, x: 340, y: 250 },
    { no: 23, x: 340, y: 120 },
    { no: 24, x: 455, y: 250 },
    { no: 25, x: 455, y: 120 },
    { no: 26, x: 575, y: 250 },
    { no: 27, x: 575, y: 120 },
    { no: 28, x: 690, y: 250 },
    { no: 29, x: 690, y: 120 },
  ];


  return (
    <>
      {arr.map((item, ind) => (
        <Vertex key={ind} no={item.no} x={item.x/changed} y={item.y/changed} type={ind} />
      ))}

      <Shopping PathList={cart} setCurritem={setCurritem}  />
    </>
  );
}

export default Graph;
