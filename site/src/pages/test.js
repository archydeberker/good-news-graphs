import { Styled, jsx } from "theme-ui";
import React, { useState } from "react";
import Plot from "react-plotly.js";

import Slider from "@material-ui/core/Slider";

const dataX = [0, 2, 4, 3, 4, 5, 2, 5, 8, 15, 13, 15, 16];
const dataY = [1, 2, 5, 2.3, 4, 7, 1.1, 6, 9.2, 12, 15, 17, 18];

const workoutMAE = (data, line) => {};
const linear_regression = (slope, intercept, x) => {
  return slope * x + intercept;
};
const defineLine = (slope, intercept) => {
  const x = [0, 20];
  const y = [intercept, slope * 20 + intercept];

  return [x, y];
};

const Equation = ({ slope, intercept }) => {
  return (
    <div style={{ fontSize: 40, textAlign: "center" }}>
      <span style={{ fontStyle: "italic", fontFamily: "serif" }}> y = </span>
      <span style={{ color: "orange", fontWeight: 50 }}>{slope}</span>
      <span style={{ fontStyle: "italic", fontFamily: "serif" }}> x+ </span>
      <span style={{ color: "green", fontWeight: 50 }}>{intercept}</span>
    </div>
  );
};

const drawErrors = (slope, intercept, X, y) => {
  const points = X.map((x, idx) => {
    return { x: x, y_hat: linear_regression(slope, intercept, x), y: y[idx] };
  });

  return points.map((p) => ({
    x: [p.x, p.x],
    y: [p.y_hat, p.y],
    type: "scatter",
    mode: "lines",
    marker: { color: "green" },
  }));
};

const App = () => {
  const [slopeValue, updateSlope] = useState(0.5);
  const [interceptValue, updateIntercept] = useState(5);

  const [isChanging, setIsChanging] = useState(false);

  const [x, y] = defineLine(slopeValue, interceptValue);

  const errors = drawErrors(slopeValue, interceptValue, dataX, dataY);
  console.log(errors);
  return (
    <Styled
      style={{
        margin: "0 auto",
        maxWidth: 1200,
        textAlign: "centre",
        padding: 100,
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <p> Slope </p>
          <Slider
            defaultValue={slopeValue}
            step={0.05}
            max={5}
            label="Slope"
            valueLabelDisplay="on"
            style={{ color: "orange" }}
            onChange={(event, value) => {
              updateSlope(value);
              setIsChanging(true);
            }}
            onChangeCommitted={() => setIsChanging(false)}
          />
          <p> Intercept </p>
          <Slider
            defaultValue={interceptValue}
            max={10}
            step={0.1}
            label="Intercept"
            valueLabelDisplay="on"
            style={{ color: "green" }}
            onChange={(event, value) => {
              updateIntercept(value);
              setIsChanging(true);
            }}
            onChangeCommitted={() => setIsChanging(false)}
          />
        </div>
        <div style={{ width: "50%", alignSelf: "center" }}>
          <Equation slope={slopeValue} intercept={interceptValue} />
        </div>
      </div>
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: "scatter",
            mode: "lines",
            marker: { color: "red" },
          },

          {
            x: dataX,
            y: dataY,
            type: "scatter",
            mode: "markers",
            marker: { color: "blue  " },
          },
        ].concat(errors)}
        layout={{
          width: 800,
          height: 500,
          xaxis: { range: [0, 20] },
          yaxis: { range: [0, 20] },
          showlegend: false,
          title: isChanging ? "Changing" : "Fixed",
        }}
      />
    </Styled>
  );
};

const Interactive = () => {
  return <App />;
};

export default Interactive;
