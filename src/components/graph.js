/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"

const Graph = ({ url }) => {
  console.log(url)
  return (
    <div
      sx={{
        maxWidth: "1000px",
        overflow: "hidden",
        position: "relative",
        display: "block",
      }}
    >
      <iframe src={url} width="90%" height="500px" sx={{ border: 0 }}></iframe>
    </div>
  )
}

export default Graph
