'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import InputRange from "react-input-range";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";

interface PriceValue {
    min: number;
    max: number;
}

interface PriceState {
    value: PriceValue;
}

interface PriceRangeProps {
    updateProductFilters: (filters: { price: PriceValue }) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({ updateProductFilters }) => {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search');

    const [price, setPrice] = useState<PriceState>({ value: { min: 0, max: 500 } });
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const filters = {
            price: price.value,
        };

        updateProductFilters(filters);
    }, [price, searchTerm, updateProductFilters]);

    const data = [
        {
            min: 0,
            max: 500,
        },
        {
            min: 50,
            max: 100,
        },
        {
            min: 100,
            max: 150,
        },
        {
            min: 150,
            max: 200,
        },
        {
            min: 200,
            max: 250,
        },
        {
            min: 250,
            max: 300,
        },
        {
            min: 300,
            max: 350,
        },        
    ];

    const handleClick = (i: number, min: number, max: number) => {
        setActive(active == i ? 0 : i);
        setPrice({ value: { min, max } });
    };

    return (
        <>
            <label className="fw-900 mt-15">Range</label>
            <div className="custome-checkbox">
                {data.map((item, i) => (
                    <div key={i}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={String(i)} onChange={() => setPrice({ value: { min: item.min, max: item.max } })}
                        />
                        <label htmlFor={String(i)} className="form-check-label">${item.min} - ${item.max}</label>

                        <br/>
                    </div>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => ({
    products: state.products.items,
});

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(PriceRange);

