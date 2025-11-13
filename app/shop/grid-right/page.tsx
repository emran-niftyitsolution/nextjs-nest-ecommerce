import { Suspense } from "react";
import ProductsClient from "../../products/products-client";

export default function ShopGridRightPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}

