'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface PriceValue {
    min: number;
    max: number;
}

interface PriceState {
    value: PriceValue;
}

interface PriceRangeSliderProps {
    updateProductFilters: (filters: { price: PriceValue }) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ updateProductFilters }) => {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search');

    const [price, setPrice] = useState<PriceState>({ value: { min: 0, max: 500 } });

    useEffect(() => {
        const filters = {
            price: price.value,
        };

        updateProductFilters(filters);
    }, [price, searchTerm, updateProductFilters]);

    const [active, setActive] = useState<number>(1);
    const handleActive = (index: number) => {
        setActive(index);
    };

    return (
        <>
            <Slider
                range
                allowCross={false}
                defaultValue={[0, 100]}
                min={0}
                max={500}
                onChange={(value: number | number[]) => {
                    if (Array.isArray(value)) {
                        setPrice({ value: { min: value[0], max: value[1] } });
                    }
                }}
            />

            <div className="d-flex justify-content-between">
                <span>
                    {price.value.min}
                </span>
                <span>
                    {price.value.max}
                </span>
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

export default connect(mapStateToProps, mapDidpatchToProps)(PriceRangeSlider);

