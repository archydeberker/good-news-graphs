/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { Styled, jsx } from "theme-ui";
import Sidebar from "./footer";
import "../normalize.css";

const Layout = ({ location, title, children }) => {
  return (
    <div sx={{ mx: "auto", maxWidth: 1500 }}>
      <div
        sx={{
          p: 2,
          my: [0, 0, 4],
          mx: [0, 0, 4],
        }}
      >
        {/* <header>{header}</header> */}
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <aside
            sx={{
              flexGrow: 1,
              flexBasis: "sidebar",
            }}
          >
            <Sidebar />
          </aside>
          <main
            sx={{
              flexGrow: 999999,
              flexBasis: 0,
              minWidth: 320,

              mx: [0, 0, 4],
              px: [0, 0, 2],
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
