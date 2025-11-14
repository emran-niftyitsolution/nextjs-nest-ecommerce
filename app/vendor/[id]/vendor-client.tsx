'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryProduct from "../../../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "../../../components/ecommerce/Filter/PriceRangeSlider";
import ShowSelect from "../../../components/ecommerce/Filter/ShowSelect";
import SizeFilter from "../../../components/ecommerce/Filter/SizeFilter";
import SortSelect from "../../../components/ecommerce/Filter/SortSelect";
import VendorFilter from "../../../components/ecommerce/Filter/VendorFilter";
import Pagination from "../../../components/ecommerce/Pagination";
import QuickView from "../../../components/ecommerce/QuickView";
import SingleProduct from "../../../components/ecommerce/SingleProduct";
import Layout from "../../../components/layout/Layout";
import { fetchProduct } from "../../../redux/action/product";
import data from "../../../util/storeData";

interface VendorClientProps {
    vendorId: string;
}

export default function VendorClient({ vendorId }: VendorClientProps) {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search') || '';
    
    const products = useSelector((state: any) => state.products);
    const productFilters = useSelector((state: any) => state.productFilters);

    const [singleStore, setSingleStore] = useState<any>(null);

    const showLimit = 12;
    const showPagination = 4;

    const [pagination, setPagination] = useState<number[]>([]);
    const [limit, setLimit] = useState(showLimit);
    const [pages, setPages] = useState(Math.ceil(products.items.length / limit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchProduct(searchTerm, "/static/product.json", productFilters) as any);
        const vendor = data.find((item) => String(item.id) === String(vendorId));
        setSingleStore(vendor || null);
        cratePagination();
    }, [productFilters, limit, pages, products.items.length, vendorId, searchTerm, dispatch]);

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
            <Layout parent="Home" sub="Store" subChild="About">
                <section className="mt-50 mb-50">
                    <div className="container mb-30">
                        {singleStore && (
                            <div className="row mb-60">
                                <div className="col-xl-3 col-lg-4 mb-md-5 mb-lg-0">
                                        <div className="vendor-logo d-flex align-items-center">
                                        <Link href={`/vendor/${singleStore.id}`}>
                                            <img
                                                src={singleStore.image || `/assets/imgs/vendor/${singleStore.img}`}
                                                alt="nest"
                                                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        <div className="vendor-name ml-15">
                                            <h6>
                                                <Link href={`/vendor/${singleStore.id}`}>{singleStore.name || singleStore.title}</Link>
                                            </h6>
                                            <div className="product-rate-cover text-end">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: "90%" }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8">
                                    <div className="vendor-info mb-50">
                                        <p className="mb-20">
                                            {singleStore.description || "NestFood is a trusted grocery store that provides fresh and organic products."}
                                        </p>
                                        <div className="vendor-info-list">
                                            <ul className="contact-infor">
                                                <li>
                                                    <img src="/assets/imgs/theme/icons/icon-location.svg" alt="nest" />
                                                    <strong>Address: </strong>
                                                    <span>{singleStore.address || "5171 W Campbell Ave undefined Kent, Utah 53127 United States"}</span>
                                                </li>
                                                <li>
                                                    <img src="/assets/imgs/theme/icons/icon-contact.svg" alt="nest" />
                                                    <strong>Call Us:</strong>
                                                    <span>{singleStore.phone || "(+91) - 540-025-124553"}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="row flex-row-reverse">
                            <div className="col-lg-4-5">
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>
                                            We found
                                            <strong className="text-brand">{products.items.length}</strong>
                                            items for you!
                                        </p>
                                    </div>
                                    <div className="sort-by-product-area">
                                        <div className="sort-by-cover mr-10">
                                            <ShowSelect selectChange={selectChange} showLimit={showLimit} />
                                        </div>
                                        <div className="sort-by-cover">
                                            <SortSelect />
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-grid">
                                    {getPaginatedProducts.length === 0 && <h3>No Products Found </h3>}

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
                                    <h5 className="section-title style-1 mb-30">Category</h5>
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
                                            <label className="fw-900">Color</label>
                                            <VendorFilter />
                                            <label className="fw-900 mt-15">Item Condition</label>
                                            <SizeFilter />
                                        </div>
                                    </div>
                                    <br />
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

