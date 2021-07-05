import { Styled } from "theme-ui";
import React from "react";
import Plot from "react-plotly.js";

import Dogs from "../data/dogs";

const defineLine = (slope, intercept) => {
  const x = [0, 20];
  const y = [intercept, slope * 20 + intercept];

  return [x, y];
};

const Graph = ({ line = false }) => {
  const x = Dogs.age;
  const y = Dogs.weight;

  console.log(line);

  const data = {
    x: x,
    y: y,
    type: "scatter",
    mode: "markers",
    marker: { color: "rgba(10,20,200,.2)  " },
  };

  const [lineX, lineY] = defineLine(1.75, -8);

  const lineData = {
    x: lineX,
    y: lineY,
    type: "scatter",
    mode: "lines",
    marker: { color: "black" },
  };

  return (
    <Styled
      style={{
        margin: "0 auto",
        maxWidth: 1200,
        textAlign: "centre",
      }}
    >
      <Plot
        data={line ? [data, lineData] : [data]}
        layout={{
          showlegend: false,
          xaxis: {
            title: { text: "Age (Weeks)" },
          },
          yaxis: {
            title: { text: "Weight (kg)" },
            range: [0, 40],
          },
        }}
      />
    </Styled>
  );
};

export default Graph;
