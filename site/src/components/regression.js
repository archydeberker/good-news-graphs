import React, { Component } from "react";

import Loadable from "@loadable/component";

const LoadableRegression = Loadable(() => import("../pages/regression"));

// Workaround to allow server side rendering for plotly: https://github.com/gatsbyjs/gatsby/issues/13274

export default function MyComponent() {
  return (
    <div>
      {" "}
      <LoadableRegression />
    </div>
  );
}
