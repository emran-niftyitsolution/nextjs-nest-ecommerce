'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowSelect from "../../components/ecommerce/Filter/ShowSelect";
import SortSelect from "../../components/ecommerce/Filter/SortSelect";
import Breadcrumb2 from "../../components/layout/Breadcrumb2";
import CategoryProduct from "../../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "../../components/ecommerce/Filter/PriceRangeSlider";
import SizeFilter from "../../components/ecommerce/Filter/SizeFilter";
import VendorFilter from "../../components/ecommerce/Filter/VendorFilter";
import Pagination from "../../components/ecommerce/Pagination";
import QuickView from "../../components/ecommerce/QuickView";
import SingleProduct from "../../components/ecommerce/SingleProduct";
import Layout from "../../components/layout/Layout";
import { fetchProduct } from "../../redux/action/product";

export default function ProductsClient() {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search') || undefined;
    
    const products = useSelector((state: any) => state.products);
    const productFilters = useSelector((state: any) => state.productFilters);

    const showLimit = 12;
    const showPagination = 4;

    const [pagination, setPagination] = useState<number[]>([]);
    const [limit, setLimit] = useState(showLimit);
    const [pages, setPages] = useState(Math.ceil(products.items.length / limit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchProduct(searchTerm, "/static/product.json", productFilters) as any);
        cratePagination();
    }, [productFilters, limit, pages, products.items.length, searchTerm, dispatch]);

    const cratePagination = () => {
        const arr = new Array(Math.ceil(products.items.length / limit))
            .fill(0)
            .map((_, idx) => idx + 1);
        setPagination(arr);
        setPages(Math.ceil(products.items.length / limit));
    };

    const startIndex = currentPage * limit - limit;
    const endIndex = startIndex + limit;
    const getPaginatedProducts = products.items.slice(startIndex, endIndex);

    const start = Math.floor((currentPage - 1) / showPagination) * showPagination;
    const end = start + showPagination;
    const getPaginationGroup = pagination.slice(start, end);

    const next = () => {
        setCurrentPage((page) => page + 1);
    };

    const prev = () => {
        setCurrentPage((page) => page - 1);
    };

    const handleActive = (item: number) => {
        setCurrentPage(item);
    };

    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(Number(e.target.value));
        setCurrentPage(1);
        setPages(Math.ceil(products.items.length / Number(e.target.value)));
    };

    return (
        <>
            <Layout noBreadcrumb="d-none">
                <Breadcrumb2 />
                <section className="mt-50 mb-50">
                    <div className="container mb-30">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-4-5">
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>
                                            We found
                                            <strong className="text-brand">
                                                {products.items.length}
                                            </strong>
                                            items for you!
                                        </p>
                                    </div>
                                    <div className="sort-by-product-area">
                                        <div className="sort-by-cover mr-10">
                                            <ShowSelect
                                                selectChange={selectChange}
                                                showLimit={showLimit}
                                            />
                                        </div>
                                        <div className="sort-by-cover">
                                            <SortSelect />
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-grid">
                                    {getPaginatedProducts.length === 0 && (
                                        <h3>No Products Found </h3>
                                    )}

                                    {getPaginatedProducts.map((item: any, i: number) => (
                                        <div
                                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                            key={i}
                                        >
                                            <SingleProduct product={item} />
                                        </div>
                                    ))}
                                </div>

                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <nav aria-label="Page navigation example">
                                        <Pagination
                                            getPaginationGroup={getPaginationGroup}
                                            currentPage={currentPage}
                                            pages={pages}
                                            next={next}
                                            prev={prev}
                                            handleActive={handleActive}
                                        />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                                <div className="sidebar-widget widget-category-2 mb-30">
                                    <h5 className="section-title style-1 mb-30">
                                        Category
                                    </h5>
                                    <CategoryProduct />
                                </div>

                                <div className="sidebar-widget price_range range mb-30">
                                    <h5 className="section-title style-1 mb-30">Fill by price</h5>
                                    <div className="price-filter">
                                        <div className="price-filter-inner">
                                            <br />
                                            <PriceRangeSlider />
                                            <br />
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="list-group-item mb-10 mt-10">
                                            <label className="fw-900">
                                                Color
                                            </label>
                                            <VendorFilter />
                                            <label className="fw-900 mt-15">
                                                Item Condition
                                            </label>
                                            <SizeFilter />
                                        </div>
                                    </div>
                                    <br />
                                </div>

                                <div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">
                                    <h5 className="section-title style-1 mb-30">New products</h5>
                                    <div className="single-post clearfix">
                                        <div className="image">
                                            <img
                                                src="/assets/imgs/shop/thumbnail-3.jpg"
                                                alt="#"
                                            />
                                        </div>
                                        <div className="content pt-10">
                                            <h5>
                                                <a>Chen Cardigan</a>
                                            </h5>
                                            <p className="price mb-0 mt-5">
                                                $99.50
                                            </p>
                                            <div className="product-rate">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <QuickView />
            </Layout>
        </>
    );
}

