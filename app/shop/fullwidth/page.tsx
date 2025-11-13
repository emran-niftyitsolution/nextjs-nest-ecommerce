import { Suspense } from "react";
import ShopFullwidthClient from "./shop-fullwidth-client";

export default function ShopFullwidthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopFullwidthClient />
    </Suspense>
  );
}

