'use client';

import { useSelector, useDispatch } from "react-redux";
import CompareTable from "../../../components/ecommerce/CompareTable";
import Layout from "../../../components/layout/Layout";
import { clearCompare, deleteFromCompare } from "../../../redux/action/compareAction";

export default function ComparePage() {
    const dispatch = useDispatch();
    const compare = useSelector((state: any) => state.compare);

    return (
        <Layout parent="Home" sub="Shop" subChild="Compare">
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <h1 className="heading-2 mb-10">Products Compare</h1>
                            <h6 className="text-body mb-40">
                                This is your products list to compare
                            </h6>
                            <div className="table-responsive">
                                {compare.items.length > 0 ? (
                                    <>
                                        <CompareTable
                                            data={compare.items}
                                            features={[
                                                "preview",
                                                "name",
                                                "price",
                                                "rating",
                                                "description",
                                                "color",
                                                "stock",
                                                "weight",
                                                "dimensions",
                                                "buy",
                                                " ",
                                            ]}
                                            deleteFromCompare={(id: string) => {
                                                dispatch(deleteFromCompare(id) as any);
                                            }}
                                        />
                                        <div className="text-right">
                                            <span
                                                className="clear-btn"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    dispatch(clearCompare() as any);
                                                }}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                Clear All
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <h4>No Products</h4>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

