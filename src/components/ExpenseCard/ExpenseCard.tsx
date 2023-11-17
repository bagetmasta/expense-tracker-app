import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Avatar,
} from "@mui/material";
import nikeLogo from "../../images/nike.png";

export default function ExpenseCard() {
  const data = {
    storeName: "Nike Super Store",
    date: "April 2022",
    totalSpend: "$2,486",
    totalBudget: "$3,000",
    progress: 75.78,
    moneyPlace: "Bank Account",
  };

  return (
    <Card
      raised
      sx={{
        borderRadius: "21px",
        overflow: "visible",
        backgroundColor: "#FAFAFA",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src={nikeLogo}
              alt="Nike Super Store"
              style={{ borderRadius: "50%", marginRight: "8px" }}
            />
            <Box>
              <Typography
                variant="subtitle1"
                color="#000"
                fontSize={16}
                fontWeight={500}
                lineHeight="normal"
                mb={"4px"}
              >
                {data.storeName}
              </Typography>
              <Typography
                variant="body2"
                color="#A3A3A3"
                fontSize={12}
                lineHeight="normal"
              >
                {data.moneyPlace}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            color="#A3A3A3"
            fontSize={12}
            lineHeight="normal"
          >
            {data.date}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box>
            <Typography
              variant="body2"
              color="#615C5C"
              fontSize={16}
              lineHeight="normal"
              mb={"16px"}
            >
              Total Spend
            </Typography>
            <Typography
              variant="h6"
              color="#2BB272"
              fontSize={18}
              fontWeight={500}
              lineHeight="normal"
            >
              {data.totalSpend}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="#615C5C"
              fontSize={16}
              lineHeight="normal"
              mb={"16px"}
            >
              Total Budget
            </Typography>
            <Typography
              variant="h6"
              color="#000"
              fontSize={18}
              fontWeight={500}
              lineHeight="normal"
            >
              {data.totalBudget}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="#2BB272"
            fontSize={18}
            fontWeight={500}
            lineHeight="normal"
          >{`${data.progress}%`}</Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <LinearProgress
            variant="determinate"
            value={data.progress}
            sx={{ flexGrow: 1, height: "10px", borderRadius: "5px" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
