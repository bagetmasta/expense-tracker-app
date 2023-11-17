import { useGetTransactionsQuery } from "../../redux/financeApi";
import { Typography, Box } from "@mui/material";
import OneTransaction from "../OneTransaction/OneTransaction";
import { Transaction } from "../../types/transaction";

export default function Transactions() {
  const { data: transactions } = useGetTransactionsQuery() as {
    data: Transaction[];
  };

  console.log(transactions);

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
          Transactions
        </Typography>
        <Typography
          sx={{ color: "#A3A3A3", fontSize: "12px", lineHeight: "normal" }}
        >
          View All
        </Typography>
      </Box>
      <Box
        component="ul"
        sx={{ listStyle: "none", padding: 0, marginBottom: "80px" }}
      >
        {transactions?.map(
          ({ id, name, amount, account, accountNumber, logoUrl, date }) => (
            <OneTransaction
              key={id}
              name={name}
              amount={amount}
              account={account}
              accountNumber={accountNumber}
              logoUrl={logoUrl}
              date={date}
            />
          )
        )}
      </Box>
    </>
  );
}
