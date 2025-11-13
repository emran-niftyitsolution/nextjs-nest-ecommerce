import { Suspense } from "react";
import ProductsClient from "./products-client";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}

