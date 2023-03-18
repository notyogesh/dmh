import {
  grey,
  lime,
  yellow,
  // amber,
  // orange,
  // deepOrange,
  // deepPurple,
  // blue,
  // cyan,
  // lightBlue,
  // purple,
  // indigo,
  // lightGreen,
  // darkGrey,
  // brown,
  // pink,
  // indigo,
  // teal,
} from "@mui/material/colors";

// background-color: #f3f3f3;
// #212121;
export const customTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: lime,
          divider: lime[200],
          background: {
            default: lime[50],
            paper: lime[200],
          },
          text: {
            primary: grey[900],
            secondary: grey[900],
            inactive: grey[700],
          },
          root: {
            main: "red",
            mainGradient: "linear-gradient(to right, tomato, cyan)",
          },
        }
      : {
          // palette values for dark mode
          primary: yellow,
          divider: yellow[200],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: yellow[500],
            secondary: yellow[500],
            inactive: grey[500],
          },
        }),
  },
});

// export const light = {
//   palette: {
//     primary: {
//       main: "#0971f1",
//       darker: "#053e85",
//     },
//     neutral: {
//       main: "#64748B",
//       contrastText: "#fff",
//     },
//   },
