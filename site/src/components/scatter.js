import React from "react";

import Loadable from "@loadable/component";

const LoadableScatter = Loadable(() => import("../pages/scatter"));

// Workaround to allow server side rendering for plotly: https://github.com/gatsbyjs/gatsby/issues/13274

export default function MyComponent() {
  return (
    <div>
      <LoadableScatter />
    </div>
  );
}
