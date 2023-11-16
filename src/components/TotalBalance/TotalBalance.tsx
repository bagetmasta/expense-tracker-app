import {
  useGetBalanceQuery,
  useGetAnalyticsQuery,
  useGetTransactionsQuery,
} from "../../redux/financeApi";

export default function TotalBalance() {
  const { data: totalBalance } = useGetBalanceQuery();
  const { data: analytics } = useGetAnalyticsQuery(2022);
  const { data: transactions } = useGetTransactionsQuery();

  console.log(totalBalance);
  console.log(analytics);
  console.log(transactions);

  return <div>TotalBalance</div>;
}
