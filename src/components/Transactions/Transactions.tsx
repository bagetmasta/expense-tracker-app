import { useGetTransactionsQuery } from "../../redux/financeApi";

export default function Transactions() {
  const { data: transactions } = useGetTransactionsQuery();

  return <div>Transactions</div>;
}
