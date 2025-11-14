'use client';

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";

interface Color {
    value: string;
}

interface ColorFilterProps {
    updateProductFilters: (filters: { color: string }) => void;
}

const ColorFilter: React.FC<ColorFilterProps> = ({ updateProductFilters }) => {
    const colors: Color[] = [
        { value: "" },
        { value: "red" },
        { value: "yellow" },
        { value: "white" },
        { value: "orange" },
        { value: "cyan" },
        { value: "green" },
        { value: "purple" },
    ];

    const [selectedColor, setColor] = useState<string>("");
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const filters = {
            color: selectedColor,
        };

        updateProductFilters(filters);
    }, [selectedColor]);

    const handleClick = (i: number, target: string) => {
        setColor(target);
        setActive(active == i ? 0 : i);
    };

    return (
        <>
            <ul className="list-filter color-filter">
                {colors.map((tag, i) => (
                    <li
                        key={i}
                        className={active == i ? "active" : ""}
                        onClick={() => handleClick(i, tag.value)}
                    >
                        <a>
                            {i == 0 ? (
                                "All"
                            ) : (
                                <span
                                    className={`product-color-${tag.value}`}
                                ></span>
                            )}
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

export default connect(null, mapDidpatchToProps)(ColorFilter);

