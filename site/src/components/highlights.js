import React from "react";

const Input = ({ children }) => (
  <span style={{ color: "rgba(50,50,200,1)" }}>{children}</span>
);

const Output = ({ children }) => (
  <span style={{ color: "#ed8008" }}>{children}</span>
);

export { Input, Output };
