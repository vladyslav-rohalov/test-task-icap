"use client";

import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
  typography: {
    fontFamily: [
      "Open Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      dark: "#001219",
      main: "#005f73",
      light: "#0a9396",
    },
    secondary: {
      main: "#C68A77",
      dark: "#747474",
      light: "#939393",
    },
    error: {
      light: "#ee9b00",
      main: "#F46145",
      dark: "#992c2c",
    },
    text: {
      primary: "#f5f6fa",
      secondary: "#ffffff33",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          ".MuiInputBase-input.MuiOutlinedInput-input": {
            color: theme.palette.text.primary,
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.primary,
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.MuiOutlinedInput": {
            zIndex: 2,
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),

        shrink: ({ theme }) => ({
          color: `${theme.palette.text.primary} !important`,
        }),
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          color: `${theme.palette.text.primary} !important`,
        }),
        root: ({ theme }) => ({
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.primary,
          },
          "&:hover": {
            ".MuiSvgIcon-root ": {
              fill: theme.palette.error.light,
              transform: "scale(1.1)",
            },
          },
          "&:hover .MuiOutlinedInput-notchedOutline ": {
            borderColor: theme.palette.primary.light,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
        }),
        icon: ({ theme }) => ({
          fill: theme.palette.text.primary,
        }),
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            backgroundColor: theme.palette.text.primary,
          },
          "&:active": {
            backgroundColor: theme.palette.primary.light,
          },
          "&.MuiMenuItem-root.Mui-selected": {
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          ul: {
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: theme.palette.primary.light,
              color: "#fff",
            },
            "& svg": {
              color: theme.palette.primary.light,
            },
          },
        }),
      },
    },

    MuiTypography: {
      styleOverrides: {
        paragraph: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        h1: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        h2: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        h3: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        h4: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        h5: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        h6: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            backgroundColor: theme.palette.text.secondary,
          },
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          transition: "all 0.3s ease-out",
          "&:hover": {
            color: theme.palette.error.light,
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      },
    },
  },
});
