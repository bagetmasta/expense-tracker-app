import { useState } from "react";
import { useGetAnalyticsQuery } from "../../redux/financeApi";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import { Typography, FormControl, MenuItem, Box } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Analytics() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { data: analytics } = useGetAnalyticsQuery(selectedYear);

  const handleYearChange = (event: SelectChangeEvent<number>) => {
    setSelectedYear(Number(event.target.value));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "24px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          Analytics
        </Typography>
        <FormControl
          variant="filled"
          size="small"
          sx={{
            minWidth: 120,
            borderRadius: "12px",
            backgroundColor: "#FF653A",
          }}
        >
          <Select
            labelId="year-select-label"
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            label="Year"
            sx={{
              backgroundColor: "transparent",
              color: "#FFF",
              fontSize: "13px",
            }}
          >
            <MenuItem value={2023}>Year - 2023</MenuItem>
            <MenuItem value={2022}>Year - 2022</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer width="100%" minHeight={300}>
        <BarChart
          data={analytics?.monthlyData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="month"
            tick={{ fill: "gray" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#fff",
              borderColor: "#ddd",
            }}
            itemStyle={{ color: "#8884d8" }}
          />
          <Bar
            dataKey="amount"
            fill="#8234F8"
            barSize={31}
            radius={[6, 6, 0, 0]}
            background={{ fill: "none" }}
          >
            {/* {
              analytics?.monthlyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.active ? "#8884d8" : "#eee"}
                />
              ))
            } */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
