import Calendar from "../components/Calendar/Calendar";
import TotalBalance from "../components/TotalBalance/TotalBalance";
import Expenses from "../components/Expenses/Expenses";
import {
  useGetBalanceQuery,
  useGetTransactionsQuery,
} from "../redux/financeApi";
import { Box } from "@mui/material";

export default function ExpensesPage() {
  const { data: balance } = useGetBalanceQuery();
  const { data: transactions } = useGetTransactionsQuery();

  console.log(transactions);

  function formatBalance(money: number | undefined) {
    return money?.toFixed(2).replace(".", ",") + ".00";
  }

  const totalBalance = formatBalance(balance?.totalBalance);

  return (
    <>
      <h2>ExpensesPage</h2>
      <Calendar />
      <Box display="flex" justifyContent="space-between" mt="100px">
        <TotalBalance
          balance={totalBalance === "undefined.00" ? "****" : totalBalance}
          title={"Total Balance"}
          accountType={transactions?.[0]?.account ?? "****"}
          accountNumber={transactions?.[0]?.accountNumber ?? "****"}
          cardColor={"#8234F8"}
          bankAccontColor={"rgba(122, 77, 190, 0.50)"}
        />
        <TotalBalance
          balance={totalBalance === "undefined.00" ? "****" : totalBalance}
          title={"Total Balance"}
          accountType={transactions?.[0]?.account ?? "****"}
          accountNumber={transactions?.[0]?.accountNumber ?? "****"}
          cardColor={"#FF643B"}
          bankAccontColor={"rgba(203, 82, 50, 0.50)"}
        />
      </Box>
      <Expenses />
    </>
  );
}
