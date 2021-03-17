import React from "react"
import { TwitterShareButton } from "react-share"

const Tweet = url => {
  return (
    <div>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-show-count="false"
      >
        Tweet this graph
      </a>
    </div>
  )
}
export default Tweet
