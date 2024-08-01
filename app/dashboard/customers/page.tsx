import { fetchCardData } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/cards";

export default async function Page() {
  const {totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = await fetchCardData(); 
  return (
    <main>
      <p>Customers Page</p>
      <Card title="Customers" value={numberOfCustomers} type="customers"></Card>
    </main>
  );
}
