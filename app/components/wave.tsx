import React from "react";
import Wave from "react-wavify";
import MainCard from "./maincard";

export const App = () => (
  <Wave
    fill="#54a7e6ff"
    paused={false}
    style={{
      display: "flex",
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "50vh",
    }}
    options={{
      height: 1,
      amplitude: 30,
      speed: 0.15,
      points: 3,
    }}
  />
);
