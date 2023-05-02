import {
  grey,
  lime,
  // yellow,
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
          divider: grey[400],

          background: {
            default: "#f3f0f1",
            paper: "#f3f0f1",
          },
          text: {
            primary: grey[900],
            secondary: grey[900],
            inactive: grey[700],
          },
          root: {
            main: "#f3f0f1",
            contrastText: grey[900],
          },
          typography: {
            allVariants: {
              // fontFamily: "serif",
              fontFamily: ["Inter", "sans-serif"].join(","),
            },
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
          // palette values for light mode
          primary: lime,
          //  contrastText: grey[500] },
          divider: grey[400],

          background: {
            default: "#f3f0f1",
            paper: "#f3f0f1",
          },
          text: {
            primary: grey[900],
            secondary: grey[900],
            inactive: grey[700],
          },
          root: {
            main: "#f3f0f1",
            contrastText: grey[900],
          },
          typography: {
            allVariants: {
              // fontFamily: "serif",
              fontFamily: ["Inter", "sans-serif"].join(","),
            },
          },
          // success: {
          //   main: "#C0FF02",
          //   contrastText: "#C0FF02",
          // },
          // action: {
          //   active: "#000",
          // },
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
