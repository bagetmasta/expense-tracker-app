import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "../../images/HomeIcon";
import CardIcon from "../../images/CardIcon";
import AddIcon from "../../images/AddIcon";
import CalendarIcon from "../../images/CalendarIcon";
import SettingsIcon from "../../images/SettingsIcon";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{
        width: "100%",
        bottom: 0,
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.09)",
        position: "fixed",
      }}
    >
      <BottomNavigationAction
        value="/"
        icon={<HomeIcon color={value === "/" ? "action" : "secondary"} />}
      />
      <BottomNavigationAction
        value="/expenses"
        icon={
          <CardIcon color={value === "/expenses" ? "action" : "secondary"} />
        }
      />
      <BottomNavigationAction icon={<AddIcon />} />
      <BottomNavigationAction icon={<CalendarIcon />} />
      <BottomNavigationAction icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}
