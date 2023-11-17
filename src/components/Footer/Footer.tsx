import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "../../images/HomeIcon";
import CardIcon from "../../images/CardIcon";
import AddIcon from "../../images/AddIcon";
import CalendarIcon from "../../images/CalendarIcon";
import SettingsIcon from "../../images/SettingsIcon";

export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: string // или number, если значение определено как число
  ) => {
    setValue(newValue);
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
      }}
    >
      <BottomNavigationAction value="home" icon={<HomeIcon />} />
      <BottomNavigationAction value="card" icon={<CardIcon />} />
      <BottomNavigationAction value="add" icon={<AddIcon />} />
      <BottomNavigationAction value="calendar" icon={<CalendarIcon />} />
      <BottomNavigationAction value="settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}
