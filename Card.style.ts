import { sva } from "../styled-system/css";
import { createStyleContext } from "../style-context";

const card = sva({
  slots: [
    "card",
    "footer",
    "button",
    "buttonText",
    "span",
    "theme",
    "body",
    "bodyText",
    "header",
    "sun",
    "title",
  ],
  base: {
    card: {
      borderRadius: "20px",
      width: "360px",
      margin: "0 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    footer: {
      borderRadius: "0px",
      width: "100%",
      margin: "0 0",
      display: "flex",
      flexDirection: "row",
      padding: "25px 25px 25px 25px",
      gap: "10px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      borderRadius: "5px",
      margin: "0 0",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      gap: "10px",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    buttonText: {
      margin: "0 0",
      textAlign: "start",
    },
    span: {
      color: "rgb(255, 255, 255)",
      fontSize: "37px",
      fontName: "Roboto",
      fontWeight: "400",
      textDecoration: "undefined",
      textTransform: "undefined",
      lineHeight: "23px",
      letterSpacing: "0.5px",
    },
    theme: {
      margin: "0 0",
      textAlign: "start",
    },
    body: {
      borderRadius: "0px",
      width: "100%",
      margin: "0 0",
      display: "flex",
      flexDirection: "column",
      padding: "25px 25px 25px 25px",
      gap: "10px",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    bodyText: {
      width: "100%",
      margin: "0 0",
      textAlign: "start",
    },
    header: {
      borderRadius: "0px",
      width: "100%",
      height: "93px",
      margin: "0 0",
      display: "flex",
      flexDirection: "row",
      padding: "25px 25px 25px 25px",
      gap: "10px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    sun: {},
    title: {
      margin: "0 0",
      textAlign: "start",
    },
  },
  variants: {
    mode: {
      dark: {
        card: {
          backgroundColor: "rgb(7, 14, 19)",
        },
        button: {
          backgroundColor: "rgb(255, 255, 255)",
        },
        buttonText: {
          color: "rgb(0, 0, 0)",
        },
        theme: {
          color: "rgb(255, 255, 255)",
        },
        bodyText: {
          color: "rgb(255, 255, 255)",
        },
        title: {
          color: "rgb(255, 255, 255)",
        },
      },
      light: {
        card: {
          backgroundColor: "rgb(255, 255, 255)",
        },
        button: {
          backgroundColor: "rgb(7, 14, 19)",
        },
        buttonText: {
          color: "rgb(255, 255, 255)",
        },
        theme: {
          color: "rgb(0, 0, 0)",
        },
        bodyText: {
          color: "rgb(0, 0, 0)",
        },
        title: {
          color: "rgb(0, 0, 0)",
        },
      },
    },
  },
});

const [withProvider, withContext] = createStyleContext(card);

export const Card = withProvider("div", "card");

Card.Footer = withContext("div", "footer");
Card.Button = withContext("div", "button");
Card.ButtonText = withContext("p", "buttonText");
Card.Span = withContext("span", "span");
Card.Theme = withContext("p", "theme");
Card.Body = withContext("div", "body");
Card.BodyText = withContext("p", "bodyText");
Card.Header = withContext("div", "header");
Card.Sun = withContext("img", "sun");
Card.Title = withContext("p", "title");
