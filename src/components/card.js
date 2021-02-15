/** @jsx jsx */

import React from "react"
import Image from "gatsby-image"
import { Card, Link, Styled, jsx } from "theme-ui"

function GraphCard(props) {
  const { coverImage, title, date, link } = props

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
      <Card>
        <Image fluid={coverImage.childImageSharp.fluid} imgStyle={{}} />

        <Styled.h1>{title}</Styled.h1>
        <Styled.h4>{date}</Styled.h4>
      </Card>
    </Link>
  )
}

export default GraphCard
