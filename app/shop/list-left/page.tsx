import { Suspense } from "react";
import ShopListLeftClient from "./shop-list-left-client";

export default function ShopListLeftPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopListLeftClient />
    </Suspense>
  );
}

