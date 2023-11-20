import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const dayOfWeek = selectedDate.getDay();

  const startOfWeek = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
  );

  const datesOfWeek = Array.from({ length: 7 }).map((_, index) => {
    const day = new Date(startOfWeek);
    day.setDate(day.getDate() + index);
    return day;
  });

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "16px",
        overflow: "hidden",
        marginTop: "70px",
        marginBottom: "32px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        bgcolor="#FAFAFA"
      >
        <IconButton>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6">April 2022</Typography>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        bgcolor="#FAFAFA"
        pb="20px"
      >
        {days.map((day, index) => (
          <Stack key={index} alignItems="center">
            <Typography
              variant="caption"
              color="#615C5C"
              mb="27px"
              fontWeight={
                selectedDate.getDate() === datesOfWeek[index].getDate() &&
                selectedDate.getMonth() === datesOfWeek[index].getMonth()
                  ? "700"
                  : "400"
              }
            >
              {day}
            </Typography>
            <Button
              onClick={() => handleDateSelect(datesOfWeek[index])}
              sx={{
                minWidth: "36px",
                minHeight: "36px",
                fontWeight:
                  selectedDate.getDate() === datesOfWeek[index].getDate() &&
                  selectedDate.getMonth() === datesOfWeek[index].getMonth()
                    ? "800"
                    : "400",
                bgcolor:
                  selectedDate.getDate() === datesOfWeek[index].getDate() &&
                  selectedDate.getMonth() === datesOfWeek[index].getMonth()
                    ? "#FF643B"
                    : "transparent",
                color:
                  selectedDate.getDate() === datesOfWeek[index].getDate() &&
                  selectedDate.getMonth() === datesOfWeek[index].getMonth()
                    ? "white"
                    : "#615C5C",
                "&:hover": {
                  bgcolor:
                    selectedDate.getDate() === datesOfWeek[index].getDate() &&
                    selectedDate.getMonth() === datesOfWeek[index].getMonth()
                      ? "#FF643B"
                      : "transparent",
                },
              }}
            >
              {datesOfWeek[index].getDate()}
            </Button>
          </Stack>
        ))}
      </Box>
    </Paper>
  );
};

export default Calendar;
