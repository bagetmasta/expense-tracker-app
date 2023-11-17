import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  AppBar as MuiAppBar,
  Box,
  CircularProgress,
  Typography,
  Container,
  Toolbar,
} from "@mui/material";
import faceLogo from "../../images/account-face.png";
import BeltAlert from "../../images/BeltAlert";
import IconButton from "@mui/material/IconButton";
import Footer from "../Footer/Footer";

export default function AppBar() {
  const location = useLocation();
  let title;

  switch (location.pathname) {
    case "/":
      title = "Home";
      break;
    case "/expenses":
      title = "Expenses";
      break;
    default:
      title = "Home";
  }

  return (
    <>
      <MuiAppBar
        sx={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          color: "#000",
          boxShadow: "none",
          bgcolor: "#fff",
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-evenly" }}>
            <Box
              sx={{
                width: 36,
                height: 40,
                bgcolor: "#9B63FC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "6px",
                paddingLeft: "4px",
                paddingRight: "4px",
                paddingTop: "2px",
              }}
            >
              <img
                src={faceLogo}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography
              variant="h1"
              sx={{ fontSize: "24px", fontWeight: 500, lineHeight: "normal" }}
            >
              {title}
            </Typography>
            <IconButton>
              <BeltAlert />
            </IconButton>
          </Toolbar>
        </Container>
      </MuiAppBar>
      <Suspense
        fallback={
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        }
      >
        <Container maxWidth="sm">
          <main>
            <Outlet />
          </main>
        </Container>
        <Footer />
      </Suspense>
    </>
  );
}
