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
          //  contrastText: grey[500] },
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
            main: "#C0FF02",
          },
          // success: {
          //   main: "#C0FF02",
          //   contrastText: "#C0FF02",
          // },
          // action: {
          //   active: "#000",
          // },
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
          root: {
            main: yellow[500],
            contrastText: grey[900],
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
// action: {
//   ...(mode === "light"
//     ? {
//         active: "#000",
//       }
//     : {
//         active: "#fff",
//       }),
// },
