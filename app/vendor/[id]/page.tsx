import { Suspense } from "react";
import VendorClient from "./vendor-client";

export default function VendorPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VendorClient vendorId={params.id} />
    </Suspense>
  );
}

