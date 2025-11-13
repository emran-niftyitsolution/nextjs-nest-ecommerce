import React from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { server } from "../../config/index";
import { findProductIndex } from "../../util/util";

const ProductId = ({ product }) => {
    if (!product) {
        return (
            <Layout parent="Home" sub="Shop" subChild="Product Not Found">
                <div className="container">
                    <h1>Product Not Found</h1>
                </div>
            </Layout>
        );
    }

    return (
        <>
        <Layout parent="Home" sub="Shop" subChild={product.title}>
            <div className="container">
                <ProductDetails product={product} />
            </div>
        </Layout>
        </>
    );
};

export async function getServerSideProps(context) {
    const { slug } = context.params;
    
    try {
        const request = await fetch(`${server}/static/product.json`);
        const data = await request.json();

        const index = findProductIndex(data, slug);

        if (index === -1) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                product: data[index],
            },
        };
    } catch (error) {
        console.error('Error fetching product:', error);
        return {
            notFound: true,
        };
    }
}

export default ProductId;
