import { Suspense } from "react";
import VendorDashboardClient from "./vendor-dashboard-client";

export default function VendorDashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VendorDashboardClient />
    </Suspense>
  );
}

