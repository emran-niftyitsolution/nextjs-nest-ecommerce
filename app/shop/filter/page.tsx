import { Suspense } from "react";
import ShopFilterClient from "./shop-filter-client";

export default function ShopFilterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopFilterClient />
    </Suspense>
  );
}

