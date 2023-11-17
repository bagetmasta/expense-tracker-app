import { Typography, Box } from "@mui/material";
import ExpenseCard from "../ExpenseCard/ExpenseCard";

export default function Expenses() {
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
          variant="h2"
          sx={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          Expences
        </Typography>
        <Typography
          sx={{ color: "#A3A3A3", fontSize: "12px", lineHeight: "normal" }}
        >
          View All
        </Typography>
      </Box>
      <ExpenseCard />
    </>
  );
}
