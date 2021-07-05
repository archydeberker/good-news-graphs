import React from "react";

const EquationBox = ({ children }) => (
  <div
    style={{
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
      fontSize: 25,
      fontFamily: "serif",
    }}
  >
    {children}
  </div>
);

const Input = ({ children }) => (
  <span style={{ color: "rgba(50,50,200,1)", fontFamily: "sans-serif" }}>
    {children}
  </span>
);

const Output = ({ children }) => (
  <span style={{ color: "#ed8008", fontFamily: "sans-serif" }}>{children}</span>
);

export { Input, Output, EquationBox };
