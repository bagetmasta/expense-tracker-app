import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { useGetBalanceQuery } from "../../redux/financeApi";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MasterCard from "../../images/MasterCard";

export default function CreditCard() {
  const { data: balance } = useGetBalanceQuery();

  function formatBalance(money: number | undefined) {
    return money?.toFixed(2).replace(".", ",") + ".00";
  }

  const totalBalance = formatBalance(balance?.totalBalance);

  return (
    <Card variant="outlined" sx={{ margin: 2, border: 0, marginTop: "90px" }}>
      <Box
        sx={{
          position: "absolute",
          top: 70,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          backgroundColor: "#9A63FB",
          borderRadius: "24px",
          height: "100px",
          zIndex: -1,
        }}
      ></Box>
      <CardContent sx={{ backgroundColor: "#2F3046", borderRadius: "24px" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="body2"
            color="#FAFAFA"
            fontWeight={500}
            fontSize={18}
            lineHeight="normal"
          >
            Total Balance
          </Typography>
          <IconButton
            aria-label="settings"
            sx={{ color: "white", transform: "rotate(90deg)" }}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography
          variant="body2"
          color="#FFF"
          fontSize={30}
          fontWeight={700}
          lineHeight="normal"
        >
          ${totalBalance}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography
            variant="body2"
            color="#A3A3A3"
            fontWeight={500}
            fontSize={18}
            lineHeight="normal"
          >
            2544 7545 3785 1023
          </Typography>
          <MasterCard />
        </Box>
      </CardContent>
    </Card>
  );
}
