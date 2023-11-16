import { useGetBalanceQuery } from "../../redux/financeApi";

export default function TotalBalance() {
  const { data: totalBalance } = useGetBalanceQuery();

  return <div>TotalBalance</div>;
}
