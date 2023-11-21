import Analytics from "../components/Analytics/Analytics";
import CreditCard from "../components/CreditCard/CreditCard";
import Transactions from "../components/Transactions/Transactions";

export default function HomePage() {
  return (
    <>
      <CreditCard />
      <Analytics />
      <Transactions />
    </>
  );
}
