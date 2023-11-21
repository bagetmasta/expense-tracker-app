import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingTop: "10px",
          paddingBottom: "7px",
        },
        icon: {
          fill: "#fff",
        },
        root: {
          "&::before": {
            content: '""',
            borderBottom: "none",
          },
          "&:hover::before": {
            borderBottom: "none",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-focused": {
            backgroundColor: "transparent",
          },
          "&.Mui-filled:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});
