/** @jsx jsx */
import React from "react";
import { jsx, Link, Flex, Box } from "theme-ui";

export default function Sidebar() {
  return (
    <div sx={{ mx: [0, 0, 4], width: "100%" }}>
      <Link href={"/"}>
        <header
          sx={{ variant: "styles.header", textAlign: ["center", "left"] }}
        >
          Intuitive ML
        </header>
      </Link>
      <Flex
        sx={{
          display: "flex",
          flexDirection: ["row", "column"],
          justifyContent: ["center", "flex-start"],
          fontSize: 3,
        }}
      >
        <Box>
          <Link sx={{ px: [2, 0, 0] }}>About</Link>
        </Box>
        <Box>
          <Link
            href="https://goodnewsgraphs.substack.com"
            sx={{ px: [2, 0, 0], variant: "links.cta" }}
          >
            Subscribe
          </Link>
        </Box>
      </Flex>
    </div>
  );
}
