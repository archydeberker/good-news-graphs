/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"

const Bio = () => {
  return (
    <div sx={{ py: 2 }}>
      <h3
        sx={{ color: "secondary", textAlign: "center", fontWeight: "heading" }}
      >
        <strong>Sign up to receive one Good News Graph each week</strong>
      </h3>
      <iframe
        src="https://goodnewsgraphs.substack.com/embed"
        width="100%"
        height
        sx={{ border: "1px solid #EEE", background: "white" }}
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  )
}

export default Bio
