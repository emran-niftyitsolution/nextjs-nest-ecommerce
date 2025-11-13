import { Suspense } from "react";
import ShopListRightClient from "./shop-list-right-client";

export default function ShopListRightPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopListRightClient />
    </Suspense>
  );
}

