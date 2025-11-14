'use client';

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";

interface SizeItem {
    value: string;
}

interface SizeFilterProps {
    updateProductFilters: (filters: { sizes: string }) => void;
}

const SizeFilter: React.FC<SizeFilterProps> = ({ updateProductFilters }) => {
    // console.log(updateProductFilters);

    const sizes: SizeItem[] = [
        { value: "s" },
        { value: "m " },
        { value: "l" },
        { value: "xl" },
    ];



    const [selectedSizes, setSizes] = useState<string>("");
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const filters = {
            sizes: selectedSizes,
        };

        updateProductFilters(filters);
    }, [selectedSizes]);

    const handleClick = (i: number, target: string) => {
        setSizes(target);
        setActive(active == i ? 0 : i);
    };

    return (
        <>
            <ul className="list-filter size-filter font-small">
                {sizes.map((tag, i) => (
                    <li
                        className={active == i ? "active" : ""}
                        onClick={() => handleClick(i, tag.value)}
                        key={i}
                    >
                        <a>
                            {i == 0 ? "All" : `${tag.value}`}
                        </a>
                    </li>
                ))}
            </ul>

        </>
    );
};



const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(null, mapDidpatchToProps)(SizeFilter);

