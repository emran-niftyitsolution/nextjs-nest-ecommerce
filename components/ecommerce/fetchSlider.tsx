'use client';

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchByCatagory } from "../../redux/action/product";
import BestSeller from "../sliders/BestSeller";
import Discount from "../sliders/Discount";
import Featured from "../sliders/Featured";
import NewArrival from "../sliders/NewArrivalTab";
import Related from "../sliders/Related";
import Trending from "../sliders/Trending";

interface Product {
    id: number | string;
    featured?: boolean;
    trending?: boolean;
    totalSell?: number;
    created?: string | number;
    discount: {
        isActive: boolean;
    };
    [key: string]: any;
}

interface ProductFilters {
    category?: string;
    [key: string]: any;
}

interface FetchSliderProps {
    productFilters: ProductFilters;
}

const FetchSlider: React.FC<FetchSliderProps> = ({ productFilters }) => {
    const [featured, setFeatured] = useState<Product[]>([]);
    const [trending, setTrending] = useState<Product[]>([]);
    const [bestSeller, setBestSeller] = useState<Product[]>([]);
    const [newArrival, setNewArrival] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<Product[]>([]);
    const [related, setRelated] = useState<Product[]>([]);

    console.log(trending);

    useEffect(() => {
        fetchProducts();
    }, [productFilters.category]);

    const fetchProducts = async () => {

        // With Category
        const allProducts: Product[] = await fetchByCatagory("/static/product.json", {
            category: productFilters.category,
        });

        // Without Category
        // const request = await fetch(`${server}/static/product.json`);
        // const allProducts = await request.json();

        // Featured Product
        const featuredProducts = allProducts.filter((item) => item.featured);

        // Trending Product
        const trendingProducts = allProducts.filter((item) => item.trending);

        // Best Seller
        const bestSellerProducts = allProducts.sort(function (a, b) {
            return (a.totalSell || 0) > (b.totalSell || 0) ? -1 : 1;
        });

        // New Arrival
        const newArrivalProducts = allProducts.sort(function (a, b) {
            return (a.created || 0) > (b.created || 0) ? -1 : 1;
        });

        // Discount
        const discountProduct = allProducts.filter(
            (item) => item.discount.isActive
        );

        setFeatured(featuredProducts);
        setTrending(trendingProducts);
        setBestSeller(bestSellerProducts);
        setNewArrival(newArrivalProducts);
        setDiscount(discountProduct);
        setRelated(allProducts);
    };

    return (
        <>
            <Trending trending={trending} />
            <Featured featured={featured} />
            <BestSeller bestSeller={bestSeller} />
            <NewArrival newArrival={newArrival} />
            <Discount discount={discount} />
            <Related related={related} />
        </>
    );
};

const mapStateToProps = (state: any) => ({
    productFilters: state.productFilters,
});

export default connect(mapStateToProps)(FetchSlider);

