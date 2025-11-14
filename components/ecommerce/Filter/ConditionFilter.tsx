'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";
import CheckBox from "./Checkbox";

interface SizeItem {
    value: string;
    checked: boolean;
    name: string;
}

interface ConditionFilterProps {
    updateProductFilters: (filters: { condition: string[] }) => void;
}

const ContitionFilter: React.FC<ConditionFilterProps> = ({ updateProductFilters }) => {
    const [sizes, setSizeCheckbox] = useState<SizeItem[]>([
        { value: "new", name: "new", checked: false },
        { value: "refurbished", name: "refurbished", checked: false },
        { value: "used", name: "used", checked: false },
    ]);

    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search');

    const [selectedSizes, setSizes] = useState<string[]>([]);

    useEffect(() => {
        const filters = {
            condition: selectedSizes,
        };

        updateProductFilters(filters);
    }, [selectedSizes, searchTerm, updateProductFilters]);

    const handleCheckBox = (
        event: React.ChangeEvent<HTMLInputElement>,
        filters: SizeItem[],
        updatefilters: (filters: SizeItem[]) => void,
        selectFilter: (filters: string[]) => void,
        text: string[]
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

const mapStateToProps = (state: any) => ({
    products: state.products.items,
});

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(ContitionFilter);

