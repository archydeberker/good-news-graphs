import "fontsource-inter/200.css";
import "fontsource-inter/300.css";
import "fontsource-inter/400.css";
import "fontsource-inter/600.css";
import "fontsource-inter/800.css";

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, Segoe UI,  Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },

  links: {
    cta: {
      color: "primary",
      textDecoration: "none",
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  sizes: {
    sidebar: 256,
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
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
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    header: {
      textAlign: "left",
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "bold",
      fontSize: 6,
      textDecoration: `underline`,
      textDecorationColor: `#ed8008`,
      transition: `all 0.3s ease-in-out`,
      "&:hover, &:focus": {
        color: `primary`,
      },
    },
    date: { color: "secondary", mt: -3 },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "bold",
      fontSize: 5,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "bold",
      fontSize: 3,
    },
    h4: {
      color: "secondary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "text",
      textDecorationColor: "rgba(10,70,150,.3)",
      "&:hover, &:focus": {
        textDecoration: "underline",
      },
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
};
