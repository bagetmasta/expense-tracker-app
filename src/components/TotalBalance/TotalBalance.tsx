import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CardIcon from "../../images/CardIcon";

type BalanceCardProps = {
  title: string;
  balance: string;
  accountType: string;
  accountNumber: string;
  cardColor: string;
  bankAccontColor: string;
};

const TotalBalance: React.FC<BalanceCardProps> = ({
  title,
  balance,
  accountType,
  accountNumber,
  cardColor,
  bankAccontColor,
}) => {
  return (
    <Card
      raised
      sx={{
        bgcolor: cardColor,
        borderRadius: "6px 6px 0 0",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          color="#FAFAFA"
          fontSize="16.421px"
          fontWeight="500"
          lineHeight="normal"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          color="#FFF"
          fontSize="27.369px"
          fontWeight="700"
          lineHeight="normal"
        >
          ${balance}
        </Typography>
      </CardContent>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          backgroundColor: "#FAFAFA",
          borderRadius: "10px 10px 0 0",
          padding: "5px",
        }}
      >
        <CardIcon color={bankAccontColor} />
        <Box>
          <Typography
            variant="subtitle1"
            color="#000"
            fontSize="14px"
            fontWeight="500"
            lineHeight="normal"
            mb="6px"
          >
            {accountType}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#A3A3A3"
            fontSize="12px"
            fontWeight="300"
            lineHeight="normal"
          >
            {accountNumber}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TotalBalance;
