import { useGetTransactionsQuery } from "../../redux/financeApi";
import { Typography } from "@mui/material";
import OneTransaction from "../OneTransaction/OneTransaction";
import { Transaction } from "../../types/transaction";

export default function Transactions() {
  const { data: transactions } = useGetTransactionsQuery() as {
    data: Transaction[];
  };

  console.log(transactions);

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          lineHeight: "normal",
          mb: "24px",
        }}
      >
        Transactions
      </Typography>
      <ul>
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
      </ul>
    </>
  );
}
