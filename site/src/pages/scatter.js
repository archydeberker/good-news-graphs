import { Styled } from "theme-ui";
import React from "react";
import Plot from "react-plotly.js";

import Dogs from "../data/dogs";

const Graph = (line = false) => {
  const x = Dogs.age;
  const y = Dogs.weight;
  return (
    <Styled
      style={{
        margin: "0 auto",
        maxWidth: 1200,
        textAlign: "centre",
      }}
    >
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: "scatter",
            mode: "markers",
            marker: { color: "rgba(10,20,200,.2)  " },
          },
        ]}
        layout={{
          xaxis: {
            title: { text: "Age (Weeks)" },
          },
          yaxis: {
            title: { text: "Weight (kg)" },
          },
        }}
      />
    </Styled>
  );
};

export default Graph;
