import { useState } from "react";
import { useGetAnalyticsQuery } from "../../redux/financeApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Analytics() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { data: analytics } = useGetAnalyticsQuery(selectedYear);

  const handleYearChange = (event: SelectChangeEvent<number>) => {
    setSelectedYear(Number(event.target.value));
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "normal",
            mb: "24px",
          }}
        >
          Analytics
        </Typography>

        <FormControl
          variant="outlined"
          size="small"
          sx={{ mb: 2, minWidth: 120 }}
        >
          <InputLabel id="year-select-label">Year</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            label="Year"
          >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <BarChart
        width={500}
        height={300}
        data={analytics?.monthlyData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis
          dataKey="month"
          scale="point"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="amount" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </>
  );
}
