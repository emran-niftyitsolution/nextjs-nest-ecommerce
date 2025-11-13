import { notFound } from "next/navigation";
import ProductDetails from "../../../components/ecommerce/ProductDetails";
import Layout from '../../../components/layout/Layout';
import { server } from "../../../config/index";
import { findProductIndex } from "../../../util/util";

interface Product {
  title: string;
  slug: string;
  id: string;
  price: number;
  oldPrice?: number;
  images: Array<{ img: string }>;
  gallery?: Array<{ thumb: string }>;
  [key: string]: any;
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const request = await fetch(`${server}/static/product.json`, {
      cache: 'no-store'
    });
    const data: Product[] = await request.json();

    const index = findProductIndex(data, slug);

    if (index === -1) {
      return null;
    }

    return data[index];
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Layout parent="Home" sub="Shop" subChild={product.title}>
      <div className="container">
        <ProductDetails product={product} />
      </div>
    </Layout>
  );
}

