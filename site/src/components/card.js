/** @jsx jsx */

import React from "react";
import Image from "gatsby-image";
import { Card, Link, Styled, jsx } from "theme-ui";

function GraphCard(props) {
  const { coverImage, title, date, link } = props;

  return (
    <Link
      href={link}
      sx={{
        textDecoration: "none",
        "> div img": {
          transition: `all 0.3s ease 0s !important`,
        },
        "&:hover": {
          "> div img": {
            transform: `scale(1.05)`,
          },
        },
      }}
    >
      <Card
        sx={{
          m: [1, 1, 2],
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Image fluid={coverImage.childImageSharp.fluid} sx={{ m: 2 }} />
        <div
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <Styled.h1>{title}</Styled.h1>
          <Styled.h4>{date}</Styled.h4>
        </div>
      </Card>
    </Link>
  );
}

export default GraphCard;
