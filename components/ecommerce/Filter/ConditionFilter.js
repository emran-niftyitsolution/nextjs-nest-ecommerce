'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";
import CheckBox from "./Checkbox";

const ContitionFilter = ({ updateProductFilters }) => {
    const [sizes, setSizeCheckbox] = useState([
        { value: "new" },
        { value: "refurbished " },
        { value: "used" },
    ]);

    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search');

    const [selectedSizes, setSizes] = useState([]);

    useEffect(() => {
        const filters = {
            condition: selectedSizes,
        };

        updateProductFilters(filters);
    }, [selectedSizes, searchTerm, updateProductFilters]);

    const handleCheckBox = (
        event,
        filters,
        updatefilters,
        selectFilter,
        text
    ) => {
        const value = event.target.value;
        const updateSizes = filters;

        updateSizes.forEach((item) => {
            if (item.value === value) {
                if (item.checked) {
                    item.checked = false;
                    const newsize = text.filter((item) => item !== value);
                    selectFilter([...newsize]);
                } else {
                    item.checked = true;
                    const newsize = text.includes(value)
                        ? text
                        : [...text, value];
                    selectFilter([...newsize]);
                }
            }
        });

        updatefilters([...updateSizes]);
    };

    return (
        <>
            <div className="custome-checkbox">
                <CheckBox
                    heading="Select Size"
                    filters={sizes}
                    handleCheckBox={(e) => {
                        handleCheckBox(
                            e,
                            sizes,
                            setSizeCheckbox,
                            setSizes,
                            selectedSizes
                        );
                    }}
                />
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    products: state.products.items,
});

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(ContitionFilter);
