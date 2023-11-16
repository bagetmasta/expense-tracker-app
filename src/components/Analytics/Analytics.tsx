import { useGetAnalyticsQuery } from "../../redux/financeApi";

export default function Analytics() {
  const { data: analytics } = useGetAnalyticsQuery(2022);

  return <div>Analytics</div>;
}
