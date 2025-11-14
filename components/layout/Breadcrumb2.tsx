'use client';

import React from "react";
import { useSearchParams } from 'next/navigation'
import Link from "next/link"
import Tags from "../ecommerce/Filter/Tags";

interface Breadcrumb2Props {
    parent?: string;
    sub?: string;
    subChild?: string;
    noBreadcrumb?: string;
}

const Breadcrumb2: React.FC<Breadcrumb2Props> = ({parent, sub, subChild, noBreadcrumb}) => {
    const searchParams = useSearchParams()
    const titlex = searchParams.get('cat') || undefined;
    return (
        <>
            <div className="page-header mt-30 mb-50">
            <div className="container">
                <div className="archive-header">
                    <div className="row align-items-center">
                        <div className="col-xl-3">
                            <h1 className="mb-15 text-capitalize">{titlex ? titlex : "Category"}</h1>
                            <div className="breadcrumb">
                                <Link href="/"><i className="fi-rs-home mr-5"></i>Home</Link>
                                <span></span> Shop <span></span> {titlex}
                            </div>
                        </div>
                        <div className="col-xl-9 text-end d-none d-xl-block">
                            <Tags/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Breadcrumb2;

