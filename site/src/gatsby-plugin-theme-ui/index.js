import "fontsource-inter/200.css";
import "fontsource-inter/300.css";
import "fontsource-inter/400.css";
import "fontsource-inter/600.css";
import "fontsource-inter/800.css";
import merge from "deepmerge";
import wp2016 from "typography-theme-wordpress-2016";
import alton from "typography-theme-alton";
import stardust from "typography-theme-stardust";
import funston from "typography-theme-funston";
import { toTheme } from "@theme-ui/typography";

export default merge(toTheme(alton), {
  links: {
    cta: {
      color: "primary",
      textDecoration: "none",
    },
  },

  sizes: {
    sidebar: 256,
  },

  images: {
    card: {
      opacity: "10%",
      "&:hover, &:focus": {
        opacity: "90%",
      },
    },
  },
  colors: {
    text: "#000",
    background: "#ffffff",
    primary: "#ed8008",
    secondary: "rgba(10,70,150,.3)",
    muted: "#d9d2c6",
    input: "rgba(10,70,150,1)",
    output: "red",
  },
  styles: {
    date: { color: "secondary" },
    inputs: {
      color: "rgb(255,0,0)",
    },

    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
});
